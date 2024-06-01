import { Injectable } from '@angular/core';
import { Http } from '../http/http.service';
import { ResponseApi } from '../../interfaces/response.interface';
import { CARGAR_EXCEL, DESCARGAR_EXCEL_PROCESADO, PROCESAR_DATA_CARGADA } from '../../config/endpoints';
import { Observable, map } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

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

  descargarArchivo() {

    return this.http.getFile(`${DESCARGAR_EXCEL_PROCESADO}`).pipe(

      map(async data => {

        if (data.body?.type === 'application/json') {

          return JSON.parse(await data.body.text()) as ResponseApi<any>;
        } else {
          return data;
        }
      })
    );
  }

  abrirArchivo() {

    return new Observable(obs => {

      this.descargarArchivo().subscribe(async (res) => {

        const response = await res;
        console.log(response)
        if (response instanceof HttpResponse) {
          console.log(response.headers)
          const filename = (response.headers.get('ms-filename'));
          console.log(filename)
          var link = document.createElement('a');
          if (response.body && filename) {
            link.href = window.URL.createObjectURL(response.body);
            link.download = filename;
            link.click();
            console.log(response.body)
          }
        } else {
          alert(response.mensaje);
          console.log(response.payload.mensaje)
        }
        obs.next(true);
      }, () => {

      });


    },);


  }
}
