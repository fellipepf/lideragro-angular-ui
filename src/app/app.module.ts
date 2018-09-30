import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { ProdutosBuscaComponent } from './produtos-busca/produtos-busca.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosGridComponent } from './produtos-grid/produtos-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosBuscaComponent,
    NavbarComponent,
    ProdutosCadastroComponent,
    ProdutosGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    DropdownModule,
    CurrencyMaskModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
