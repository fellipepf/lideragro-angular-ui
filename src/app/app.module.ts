import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { CategoriaModule } from './categoria/categoria.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { LiderHttp } from './seguranca/lider-http';
import { UsuarioCadastroComponent } from './usuarios/usuario-cadastro/usuario-cadastro.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { JwtHttpInterceptor } from './seguranca/jwt-interceptor';
import { RelatoriosModule } from './relatorios/relatorios.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ProdutosModule,
    CategoriaModule,
    DepartamentosModule,
    UsuariosModule,
    RelatoriosModule,
    
    CoreModule,
    AppRoutingModule,
    SegurancaModule

  ],

  providers: [  { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
