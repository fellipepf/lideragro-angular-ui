import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { ProdutosBuscaComponent } from './produtos-busca/produtos-busca.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { DepartamentosRoutingModule } from '../departamentos/departamento-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CurrencyMaskModule,
    
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    DropdownModule,
    MessagesModule,
    MessageModule,

    ProdutosRoutingModule
  ],
  declarations: [
    ProdutosBuscaComponent,
    ProdutosCadastroComponent
  ],
  exports: [
    // ProdutosBuscaComponent,
    // ProdutosCadastroComponent
  ]
})
export class ProdutosModule { }
