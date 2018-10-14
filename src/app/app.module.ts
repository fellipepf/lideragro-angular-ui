import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { CoreModule } from './core/core.module';
import { ProdutoService } from './produtos/produto.service';

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
    CoreModule

  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
