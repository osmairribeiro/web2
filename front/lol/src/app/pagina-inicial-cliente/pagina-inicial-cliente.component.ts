import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial-cliente',
  standalone: true,
  imports: [],
  templateUrl: './pagina-inicial-cliente.component.html',
  styleUrl: './pagina-inicial-cliente.component.css'
})
export class PaginaInicialClienteComponent implements OnInit {
  openOrders: any[] = [];

  ngOnInit(): void {
    this.loadOpenOrders();
  }

  loadOpenOrders(): void {
    const storedOrders = localStorage.getItem('openOrders');
    if (storedOrders) {
      this.openOrders = JSON.parse(storedOrders);
    } else {
      console.error('Nenhum pedido em aberto encontrado.');
    }
  }
}
