import { Injectable } from '@angular/core';
import { USUARIO_STORAGE } from '../../config/properties';
import { StorageService } from '../storage/storage.service';




@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(

    private storage: StorageService,
  ) { }


 
  obtenerToken() {
    return (this.storage.obtener<any>(USUARIO_STORAGE))?.token;
  }


 

  obtenerUsuario() {

    return this.storage.obtener<any>(USUARIO_STORAGE);

  }



  limpiarStorage() {
    this.storage.eliminar(USUARIO_STORAGE);
  }


}

