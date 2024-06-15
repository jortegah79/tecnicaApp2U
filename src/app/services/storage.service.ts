import { Result } from '../models/PhotographerResponse.model';
import { Injectable, inject, OnInit } from '@angular/core';
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

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  saveData(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async loadData(key: string): Promise<any> {
    return await this._storage?.get(key);
  }
  clearData() {
    this._storage?.clear();
  }
  async removeData(key: string) {
    await this._storage?.remove(key);
  }
  async countResults() {
    const data: Result[] = (await this._storage?.get('results')) ?? [];
    return data.length;
  }

  async insertData() {
    let data = fetch('assets/datos.json')
      .then((res) => res.json())
      .then((data) => {
        this.saveData(environment.RESULTS, data);
      });
  }

  async getDataEvent(id: string): Promise<Result> {
    const data = await this.loadData(environment.RESULTS)??[];

    const index = data!.findIndex(
      (element: Result) => (element as Result)['id'] === parseInt(id)
    );

    if (index === -1) {
      throw new Error(`No data found for id: ${id}`);
    }

    return data[index];
  }
}
