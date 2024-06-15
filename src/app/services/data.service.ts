import { PhotographerResponse, Result } from './../models/PhotographerResponse.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, lastValueFrom, of, tap } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  private storage = inject(StorageService);

  private user: string = 'test@gmail.com';
  private password: string = '1234';
  private uri: string = 'https://inphototest.app2u.es/api/photographer/';
  resultados: Result[] = [];

   getData(uri: string = this.uri,withNext:boolean=false):Observable<PhotographerResponse>{


     const credentials = btoa(`${this.user}:${this.password}`);
     const headers = new HttpHeaders({
       Authorization: `Basic ${credentials}`,
       });

       return  this.http.get<PhotographerResponse>(uri, { headers })
       .pipe(
         tap(async (data: PhotographerResponse) => {
        const resultsStoreQuantity=await this.storage.countResults();
        let results=[];

        if(data.count===resultsStoreQuantity){
          return this.storage.loadData(environment.RESULTS);
        }else if(!withNext){
          results=[];
        }else{
          results=await this.storage.loadData(environment.RESULTS)??[];
        }
        this.storage.saveData(environment.RESULTS,[...results,...data.results]);
        if(data.next){
           await lastValueFrom(this.getData(data.next,true));
         }
      })
    );
  }



}
