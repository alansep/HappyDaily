import { Injectable } from '@angular/core';
import { LocalStorageData } from '../model/local-storage-data.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(key: string, data: string): void {
    localStorage.setItem(key, data);
  }

  public loadData(key: string): LocalStorageData {
    return new LocalStorageData(key, localStorage.getItem(key));
  }

}
