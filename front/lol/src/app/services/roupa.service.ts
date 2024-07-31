import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roupa } from '../shared/models/roupas';


@Injectable({
  providedIn: 'root'
})
export class RoupaService {

  //private apiUrl = 'http://localhost:3000/roupas';
  private apiUrl = 'http://localhost:8080/roupas'; //ajustado para o backend
  

  constructor(private http: HttpClient) { }

  getAllRoupa(): Observable<Roupa[]> {
    return this.http.get<Roupa[]>(this.apiUrl);
  }

  // addRoupa(roupa: Roupa): Observable<Roupa> {
  //   return this.http.post<Roupa>(this.apiUrl, roupa);
  // }

  // updateRoupa(roupa: Roupa): Observable<Roupa> {
  //   return this.http.put<Roupa>(`${this.apiUrl}/${roupa.id}`, roupa);
  // }

  saveRoupa(roupa: Roupa): Observable<Roupa> {
    if (roupa.id) {
      return this.http.put<Roupa>(`${this.apiUrl}/${roupa.id}`, roupa);
    } else {
      return this.http.post<Roupa>(this.apiUrl, roupa);
    }
  }
  
  // deleteRoupa(id: number): Observable<Roupa> {
  //   return this.http.delete<Roupa>(`${this.apiUrl}/${id}`);
  // }

  deleteRoupa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
