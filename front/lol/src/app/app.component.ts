import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaInicialClienteComponent } from './pagina-inicial-cliente/pagina-inicial-cliente.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CriarPedidoComponent,
    PaginaInicialClienteComponent,
    HeaderComponent,
    FooterComponent,
    ConsultarPedidoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lol';
}
