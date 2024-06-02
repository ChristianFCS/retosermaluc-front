import { Injectable } from '@angular/core';
import { Http } from '../http/http.service';
import { UtilService } from '../util/util.service';
import { LOGIN } from '../../config/endpoints';
import { ResponseApi } from '../../interfaces/response.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: Http,
    private util: UtilService,
  ) { }
  login(body:any) {
    return this.http.postQuery<ResponseApi<{token: string}>>(LOGIN, body);
  }
}
