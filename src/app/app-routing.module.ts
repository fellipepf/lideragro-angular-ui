import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";


const rotas: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
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
