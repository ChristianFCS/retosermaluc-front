import { Injectable } from '@angular/core';
import { Http } from '../http/http.service';
import { ResponseApi } from '../../interfaces/response.interface';
import { CARGAR_EXCEL, PROCESAR_DATA_CARGADA } from '../../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: Http) { }

  private builFormData(file: File) {

    const formData = new FormData();

    formData.append('file',file );



    return formData;
  }

  cargarArchivo(file: File,) {
    return this.http.postQuery<ResponseApi<string>>(CARGAR_EXCEL, this.builFormData(file));
  }

  procesarDataCargada(){
    return this.http.postQuery<ResponseApi<string>>(PROCESAR_DATA_CARGADA,null );
  }
}
