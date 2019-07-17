import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import localePt from '@angular/common/locales/pt';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { ProdutoService } from '../produtos/produto.service';
import { CategoriaService } from './../categoria/categoria.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AuthService } from '../seguranca/auth.service';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { LiderHttp } from '../seguranca/lider-http';
import { DepartamentoService } from '../departamentos/departamento.service';
import { UnidadeMedidaService } from '../unidadeMedida/unidade-medida.service';
import { UsuarioService } from '../usuarios/usuario.service';



registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],

  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],

  exports:[
    ToastyModule,
    ConfirmDialogModule,
    NavbarComponent
  ],

  providers: [
    ProdutoService,
    CategoriaService,
    DepartamentoService,
    UnidadeMedidaService,
    UsuarioService,

    ConfirmationService,
    AuthService,
    LiderHttp,
    ErrorHandlerService,

    JwtHelperService,
    Title,
    { provide: LOCALE_ID , useValue: 'pt' }   //provider por valor
    
  ]
})
export class CoreModule { }
