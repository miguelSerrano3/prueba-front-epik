import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpikService {
  apiUrl = "https://rickandmortyapi.com/api/";

  constructor(private http : HttpClient) { }

  getPersonajes(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.apiUrl}character`,{ headers: headers });
  }

  getLocation(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.apiUrl}location`, { headers: headers });
  }

  getEpisode(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.apiUrl}episode`, { headers: headers });
  }

}
