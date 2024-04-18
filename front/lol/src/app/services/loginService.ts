import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../shared/models/user';
import { Login } from '../shared/models/login';

const LS_CHAVE: string = "usuarioLogado";


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private localStorageKey = 'cadastros';



  constructor() { }

  public get usuarioLogado(): User {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null); 

  }

  public set usuarioLogado(user: User) {
    localStorage[LS_CHAVE] = JSON.stringify(user);
  }

  inserir(user: User) {
    const cadastros = this.obterCadastros();
    cadastros.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(cadastros));
  }

  obterCadastros(): any[] {
    const cadastrosString = localStorage.getItem(this.localStorageKey);
    return cadastrosString ? JSON.parse(cadastrosString) : [];
  }

  public login(login: Login): Observable<User | null> {
  //  TODO LÓGICA DE LOGIN A SER IMPLEMENTADA
    let usu = new User();
    return of(usu)
  }

  public logout() {
    delete localStorage[LS_CHAVE];
  }
}
