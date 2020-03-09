import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<any[]>('http://localhost:4545/liste_clients');
  }
}
