import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './modelos/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  url = 'http://localhost:3000/series';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.url);
  }

  getSerie(id: number | string): Observable<Serie> {
    return this.http.get<Serie>(this.url + '/' + id);
  }

}
