import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProdutosBuscaComponent } from "./produtos-busca/produtos-busca.component";
import { ProdutosCadastroComponent } from "./produtos-cadastro/produtos-cadastro.component";

const rotas: Routes = [
    { path: 'produtos', component: ProdutosBuscaComponent },
    { path: 'produtos/novo', component: ProdutosCadastroComponent },
    { path: 'produtos/:id', component: ProdutosCadastroComponent }

];


@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
  })
  export class ProdutosRoutingModule { }
  