import { Result } from '../models/PhotographerResponse.model';
import { Injectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  private storage = inject(Storage);

  constructor() {
    this.init();
  }

  //métode per iniciar el storage.
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //guarda dades
  saveData(key: string, value: any) {
    this._storage?.set(key, value);
  }

  //recupera dades
  async loadData(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  //esborra totes les dades
  clearData() {
    this._storage?.clear();
  }

  //esborra les dades de la clau pasada
  async removeData(key: string) {
    await this._storage?.remove(key);
  }

  //torna el número de dades que conté una clau
  async countResults() {
    const data: Result[] = (await this._storage?.get('results')) ?? [];
    return data.length;
  }

  //Torna les dades de 1 sol element de tipus Result ( un event o fotografia )
  async getDataEvent(id: string): Promise<Result> {
    const data = await this.loadData(environment.RESULTS)??[];

    //busquem l'index del objecte.
    const index = data!.findIndex((element: Result) => (element as Result)['id'] === parseInt(id) );

    //si no es troba, llençem un error per capturar-lo a la página Event.
    if (index === -1) {
      throw new Error(`No data found for id: ${id}`);
    }

    return data[index];
  }
}
