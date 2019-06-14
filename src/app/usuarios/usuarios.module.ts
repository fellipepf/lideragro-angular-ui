import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { UsuariosRoutingModule } from './usuario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TooltipModule,

    MessagesModule,
    MessageModule,
    InputTextModule,
    TableModule,
    ButtonModule,

    UsuariosRoutingModule
  ],
  declarations: [UsuarioCadastroComponent]
})
export class UsuariosModule { }
