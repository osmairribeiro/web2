import { Injectable } from '@angular/core';
import { Pedido } from '../shared/models/pedido';
import { Roupa } from '../shared/models/roupas';

const LS_ROUPAS_KEY = 'roupas';
const LS_PEDIDOS_KEY = 'pedidos';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
    if (!localStorage[LS_ROUPAS_KEY]) {
      const initialRoupas: Roupa[] = [
        { id: 1, nome: "Camiseta Polo Marrom", preco: 19, prazo: 3 },
        { id: 4, nome: "Blusa feminina especial", preco: 28, prazo: 2 },
        { id: 5, nome: "Sapato infantil especial", preco: 46, prazo: 2 },
        { id: 8, nome: "Meião de futebol", preco: 40, prazo: 1 },
        { id: 9, nome: "Meia futebol verde", preco: 13, prazo: 1 },
        { id: 10, nome: "Cueca vermelha Atletico", preco: 4, prazo: 1 },
        { id: 11, nome: "Cueca Verde Coxa", preco: 2, prazo: 1 }
      ];
      localStorage[LS_ROUPAS_KEY] = JSON.stringify(initialRoupas);
    }

    if (!localStorage[LS_PEDIDOS_KEY]) {
      localStorage[LS_PEDIDOS_KEY] = JSON.stringify([]);
    }
  }

  listarRoupas(): Roupa[] {
    const roupas = localStorage[LS_ROUPAS_KEY];
    return roupas ? JSON.parse(roupas) : [];
  }

  listarPedidos(): Pedido[] {
    const pedidos = localStorage[LS_PEDIDOS_KEY];
    return pedidos ? JSON.parse(pedidos) : [];
  }

  salvarPedido(pedido: Pedido): void {
    const pedidos: Pedido[] = this.listarPedidos();
    pedido.id = new Date().getTime();
    pedidos.push(pedido);
    localStorage[LS_PEDIDOS_KEY] = JSON.stringify(pedidos);
  }
}
