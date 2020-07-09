import { Injectable } from '@angular/core';
import { login } from '../models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = "https://desarrollo.epik.com.co:6637/api/prueba/login";
  constructor(private http : HttpClient) { }

  setLogin(data:login):Observable<any>{
    let params = JSON.stringify(data);
    //console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}`, params, { headers: headers });
  }
}
