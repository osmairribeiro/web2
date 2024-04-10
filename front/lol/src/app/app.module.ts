// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component'; // Importe o componente

import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@NgModule({
  declarations: [
    AppComponent,
    ConsultarPedidoComponent // Declare o componente
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicione o FormsModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
