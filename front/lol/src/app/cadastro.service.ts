import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private localStorageKey = 'cadastros';

  constructor() { }

  salvarCadastro(cadastro: any) {
    const cadastros = this.obterCadastros();
    cadastros.push(cadastro);
    localStorage.setItem(this.localStorageKey, JSON.stringify(cadastros));
  }

  obterCadastros(): any[] {
    const cadastrosString = localStorage.getItem(this.localStorageKey);
    return cadastrosString ? JSON.parse(cadastrosString) : [];
  }
}

