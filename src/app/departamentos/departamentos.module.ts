import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { DepartamentosCadastroComponent } from './departamentos-cadastro/departamentos-cadastro.component';
import { CategoriaCadastroComponent } from '../categoria/categoria-cadastro/categoria-cadastro.component';

const rotas: Routes = [
  { path: 'categorias', component: CategoriaCadastroComponent }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TooltipModule,
    RouterModule.forChild(rotas),

    MessagesModule,
    MessageModule,
    InputTextModule,
    TableModule,
    ButtonModule
  ],
  declarations: [DepartamentosCadastroComponent]
})
export class DepartamentosModule { }
