import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Pedido {
  id: number;
  dataHora: Date;
  cliente: string;
  detalhes: string;
}

@Component({
  selector: 'app-pagina-inicial-funcionario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-inicial-funcionario.component.html',
  styleUrls: ['./pagina-inicial-funcionario.component.css']
})
export class PaginaInicialFuncionarioComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor() { } 

  ngOnInit(): void {
    this.buscarPedidosEmAberto();
  }

  buscarPedidosEmAberto() {
      this.pedidos = [{
      id: 1,
      dataHora: new Date(),
      cliente: 'Joao',
      detalhes: 'Camiseta'
    }];
  }

  registrarRecolhimento(id: number) {
      console.log(`Registro recolhimento para o pedido ID: ${id}`);
  }
}
