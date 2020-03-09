import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsServiceService {

  constructor(private http: HttpClient) {}

  getFilms() {
    return this.http.get<any[]>('http://localhost:4545/list_films');
  }

}
