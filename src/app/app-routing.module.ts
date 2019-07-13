import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";
import { CategoriaCadastroComponent } from "./categoria/categoria-cadastro/categoria-cadastro.component";
import { DepartamentosCadastroComponent } from "./departamentos/departamentos-cadastro/departamentos-cadastro.component";
import { LoginComponent } from "./seguranca/login/login.component";
import { UsuarioCadastroComponent } from "./usuarios/usuario-cadastro/usuario-cadastro.component";
import { NaoAutorizadoComponent } from "./core/nao-autorizado.component";


const rotas: Routes = [
    { path: 'categorias', component: CategoriaCadastroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'departamentos',  redirectTo: 'departamentos', pathMatch: 'full' },
    { path: 'usuarios', component: UsuarioCadastroComponent },

    { path: 'nao-autorizado', component: NaoAutorizadoComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
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
