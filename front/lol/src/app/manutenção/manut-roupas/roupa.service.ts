import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roupa } from './roupas.model';

@Injectable({
  providedIn: 'root'
})
export class RoupaService {

  private apiUrl = 'localHost4201/roupa'

  constructor(private http: HttpClient) { }

  getRoupa(): Observable<Roupa[]> {
    return this.http.get<Roupa[]>(this.apiUrl);
  }

}
