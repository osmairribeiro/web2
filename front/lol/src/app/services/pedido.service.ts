import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, of } from 'rxjs';
import { Pedido } from '../shared/models/pedido';
import { Roupa } from '../shared/models/roupas';

const LS_CHAVE: string = 'roupas';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor() {}

  listarRoupas(): any[] {
    const roupas = localStorage.getItem(LS_CHAVE);
    return roupas ? JSON.parse(roupas) : [];
  }

  concluirPedido(pedido: any[]): void {
    // Simular a conclusão do pedido (por exemplo, salvar em outro local ou resetar o local storage)
    console.log('Pedido concluído:', pedido);
  }
  /*constructor(private localStorageService: LocalStorageService) {}

  getRoupas(): Observable<Roupa[]> {
    return of(this.localStorageService.listarRoupas());
  }

  salvarPedido(pedido: Pedido): Observable<Pedido> {
    this.localStorageService.salvarPedido(pedido);
    return of(pedido);
  }*/
}
