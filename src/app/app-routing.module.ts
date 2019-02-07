import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";
import { CategoriaCadastroComponent } from "./categoria/categoria-cadastro/categoria-cadastro.component";
import { DepartamentosCadastroComponent } from "./departamentos/departamentos-cadastro/departamentos-cadastro.component";
import { LoginComponent } from "./seguranca/login/login.component";


const rotas: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
    { path: 'categorias', component: CategoriaCadastroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'departamentos',  redirectTo: 'departamentos', pathMatch: 'full' },
    { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({

    imports: [
        RouterModule.forRoot(rotas)

    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
