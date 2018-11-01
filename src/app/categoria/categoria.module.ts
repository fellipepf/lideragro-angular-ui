import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { Routes, RouterModule } from '@angular/router';


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
  exports: [
    RouterModule
],
  declarations: [
    CategoriaCadastroComponent
  ]
})
export class CategoriaModule { }
