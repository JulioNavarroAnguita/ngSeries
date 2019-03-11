import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './modelos/serie';
import { tap } from 'rxjs/operators';

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

  createSerie(serie: Serie) {
    return this.http.post(this.url, serie);
  }

  deleteSerie(id: number | string): Observable<Serie> {
    return this.http.delete<Serie>(this.url + '/' + id);
  }

  updateSerie(serie: Serie) {
    return this.http.put(this.url + '/' + serie.id, serie);
  }

}
