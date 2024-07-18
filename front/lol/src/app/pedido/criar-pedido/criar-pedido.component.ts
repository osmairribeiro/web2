import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Roupa } from '../../shared/models/roupas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './criar-pedido.component.html',
  styleUrl: './criar-pedido.component.css',
})
export class CriarPedidoComponent implements OnInit {
  roupas: Roupa[] = [];
  pedido: Roupa[] = [];
  valorTotal: number = 0;
  prazoTotal: number = 0;
  pedidoConcluido: boolean = false;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.roupas = this.pedidoService.listarRoupas();
  }

  adicionarRoupa(roupa: any): void {
    this.pedido.push(roupa);
    this.valorTotal += parseFloat(roupa.preco);
    this.prazoTotal = Math.max(this.prazoTotal, parseInt(roupa.prazo));
  }

  concluirPedido(): void {
    if (
      confirm(
        `Confirmar pedido no valor de R$ ${this.valorTotal} com prazo de ${this.prazoTotal} dias?`
      )
    ) {
      this.pedidoService.concluirPedido(this.pedido);
      alert('Pedido concluído com sucesso!');
    }
  }
}
