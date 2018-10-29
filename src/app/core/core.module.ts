import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import localePt from '@angular/common/locales/pt';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import { ToastyModule } from 'ng2-toasty';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { ProdutoService } from '../produtos/produto.service';
import { CategoriaService } from './../categoria/categoria.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';


registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],

  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
  ],

  exports:[
    ToastyModule,
    ConfirmDialogModule,
    NavbarComponent
  ],

  providers: [
    ProdutoService,
    CategoriaService,

    ConfirmationService,
    Title,
    { provide: LOCALE_ID , useValue: 'pt' },   //provider por valor
    ErrorHandlerService
  ]
})
export class CoreModule { }
