import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProdutosBuscaComponent } from "./produtos-busca/produtos-busca.component";
import { ProdutosCadastroComponent } from "./produtos-cadastro/produtos-cadastro.component";
import { AuthGuard } from "../seguranca/auth.guard";

const rotas: Routes = [
    { path: 'produtos', component: ProdutosBuscaComponent, canActivate: [AuthGuard],  data: { roles: ['ROLE_PESQUISAR_LANCAMENTO']} },
    { path: 'produtos/novo', component: ProdutosCadastroComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }},
    { path: 'produtos/:id', component: ProdutosCadastroComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }}

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
  