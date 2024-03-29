import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { LoginComponent } from './login/login.component';
import { AutoCadastroComponent } from './autocadastro/autocadastro.component';
import { PaginaInicialClienteComponent } from './pagina-inicial-cliente/pagina-inicial-cliente.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'autocadastro', component: AutoCadastroComponent },
    { path: 'pedidos/novo', component: CriarPedidoComponent },
    { path: 'pedidos/consultar/:id', component: ConsultarPedidoComponent },
    { path: 'home/cliente', component: PaginaInicialClienteComponent }
];
