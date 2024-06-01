import { Injectable } from '@angular/core';
import { APP } from '../../config/properties';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }


  guardar(key: string, value: any) {

    if (value) {
      const toJsonString = JSON.stringify(value);
      sessionStorage.setItem(APP + "_" + key, toJsonString);
    }

  }

  obtener<T>(key: string): T | null {

    const value = sessionStorage.getItem(APP + "_" + key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  eliminar(key: string) {
    sessionStorage.removeItem(APP + "_" + key);

  }


}
