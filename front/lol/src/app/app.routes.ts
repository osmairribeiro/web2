import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pedidos/novo', component: CriarPedidoComponent },
    { path: 'login', component: LoginComponent }
];
