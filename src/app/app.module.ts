import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { CategoriaModule } from './categoria/categoria.module';
import { DepartamentosModule } from './departamentos/departamentos.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    ProdutosModule,
    CategoriaModule,
    DepartamentosModule,
    CoreModule,
    AppRoutingModule

  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
