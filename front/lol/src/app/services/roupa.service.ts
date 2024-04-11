import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roupa } from '../shared/models/roupas';

@Injectable({
  providedIn: 'root'
})
export class RoupaService {

  private apiUrl = 'http://localhost:3000/roupas';
   

  constructor(private http: HttpClient) { }

  getRoupa(): Observable<Roupa[]> {
    return this.http.get<Roupa[]>(this.apiUrl);
  }

  addRoupa(roupa: Roupa): Observable<Roupa> {
    return this.http.post<Roupa>(this.apiUrl, roupa);
  }

  updateRoupa(roupa: Roupa): Observable<Roupa> {
    return this.http.put<Roupa>(`${this.apiUrl}/${roupa.id}`, roupa);
  }

  
  deleteRoupa(id: number): Observable<Roupa> {
    return this.http.delete<Roupa>(`${this.apiUrl}/${id}`);
  }

}
