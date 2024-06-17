import {
  PhotographerResponse,
  Result,
} from './../models/PhotographerResponse.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom, tap } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  private storage = inject(StorageService);

  private user: string = environment.user;
  private password: string = environment.password;
  private uri: string = environment.URL_DATA;
  resultados: Result[] = [];

  getData(
    uri: string = this.uri,
    withNext: boolean = false
  ): Observable<PhotographerResponse> {
    //creem un string codificat amb les dades de l'usuari i password.
    const credentials: string = btoa(`${this.user}:${this.password}`);

    //Creem uns headers amb l'informació indicada, Authorization y Accept
    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      Accept: 'Application/json',
    });

    //Fem una peticio get que retornará un objecte de tipus PhotographerResponse
    return this.http.get<PhotographerResponse>(uri, { headers }).pipe(
      tap(async (data: PhotographerResponse) => {
        const resultsStoreQuantity = await this.storage.countResults();
        let results = [];

        //comprobem si la quantitat guardada d'informació correspon la clau 'count' del objecte PhotographerResponse.
        //Si es així, tornem les dades guardades i estalviem una trucada al server
        if (data.count === resultsStoreQuantity) {
          return this.storage.loadData(environment.RESULTS);

          //si no, comprobem si el valor WithNext del metode ha sigut passat con false. Si es ai´xi, es la primera trucada i resultats es un array buit.
        } else if (!withNext) {
          results = [];
        } else {
          //si arriba aquí, no es el primer cop que fem la petició, llavors obtenim les dades ja guardades.
          results = (await this.storage.loadData(environment.RESULTS)) ?? [];
        }
        //guardem les dades al storage
        this.storage.saveData(environment.RESULTS, [
          ...results,
          ...data.results,
        ]);
        if (data.next) {
          //si la dada next te un valor, tornem a cridar el métode getData pero li pasem un true com a segon valor. El primer es la url a la clau next
          await lastValueFrom(this.getData(data.next, true));
        }
      })
    );
  }
}
