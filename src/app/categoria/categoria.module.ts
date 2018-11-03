import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';

const rotas: Routes = [
  { path: 'categorias', component: CategoriaCadastroComponent },
  { path: 'categorias/novo', component: CategoriaCadastroComponent },
  { path: 'categorias/:id', component: CategoriaCadastroComponent }

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(rotas),

    TooltipModule,
    DropdownModule,
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
