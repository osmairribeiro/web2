import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { PaginaInicialClienteComponent } from './pagina-inicial-cliente/pagina-inicial-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CriarPedidoComponent,
    PaginaInicialClienteComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lol';
}
