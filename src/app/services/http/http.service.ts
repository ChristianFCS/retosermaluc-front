import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from '../util/util.service';



@Injectable({
  providedIn: 'root'
})
export class Http {
  URL_SERVICIO = 'http://localhost:8080';

  constructor(public http: HttpClient,
    private util: UtilService,

  ) { }
  
  getQuery<T>(query: string) {
    let headersDefault = new HttpHeaders({
      Authorization: `Bearer ${this.util.obtenerToken()}`
    });
    const url = `${this.URL_SERVICIO}/${query}`;
    return this.http.get<T>(url, { headers: headersDefault });

  }

  postQuery<T>(query: string, body: any) {
    let headersDefault = new HttpHeaders({
      Authorization: `Bearer ${this.util.obtenerToken()}`
    });
    const url = `${this.URL_SERVICIO}/${query}`;
    return this.http.post<T>(url, body, { headers: headersDefault });

  }


  getFile(query: string, headers?: HttpHeaders) {
    let headersDefault = new HttpHeaders({
      Authorization: `Bearer ${this.util.obtenerToken()}`,


    });
    headersDefault = headers ? headers : headersDefault;
    const url = `${this.URL_SERVICIO}/${query}`;
    return this.http.get(url, { headers: headersDefault, responseType: 'blob', observe: 'response' });

  }


}
