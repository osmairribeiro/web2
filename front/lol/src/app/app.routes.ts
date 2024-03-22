import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { LoginComponent } from './login/login.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { PaginaInicialClienteComponent } from './pagina-inicial-cliente/pagina-inicial-cliente.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pedidos/novo', component: CriarPedidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'autocadastro', component: AutocadastroComponent },
    { path: 'pagina-inicial-cliente', component: PaginaInicialClienteComponent  },
    { path: 'pedidos/consultar', component: ConsultarPedidoComponent }
];
