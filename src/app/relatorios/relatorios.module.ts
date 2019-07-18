import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioProdutosComponent } from './relatorio-produtos/relatorio-produtos.component';


import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RelatoriosRoutingModule } from './relatorios-routing.module';



@NgModule({
  declarations: [RelatorioProdutosComponent],
  imports: [
    CommonModule,

    MessagesModule,
    MessageModule,

    RelatoriosRoutingModule,

  ]
})
export class RelatoriosModule { }
