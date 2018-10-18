import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';

import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { CoreModule } from './core/core.module';
import { ProdutoService } from './produtos/produto.service';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    ProdutosModule,
    CoreModule

  ],

  providers: [
    ProdutoService,
    ConfirmationService,
    { provide: LOCALE_ID , useValue: 'pt' }   //provider por valor
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
