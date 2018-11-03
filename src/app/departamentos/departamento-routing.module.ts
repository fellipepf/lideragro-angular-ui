import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DepartamentosCadastroComponent } from "./departamentos-cadastro/departamentos-cadastro.component";

const rotas: Routes = [
    { path: 'departamentos', component: DepartamentosCadastroComponent },
    { path: 'departamentos/:id', component: DepartamentosCadastroComponent },
    { path: 'departamentos/novo', component: DepartamentosCadastroComponent }
  
  ];


@NgModule({
    imports: [
        RouterModule.forChild(rotas),
    ],
    exports: [
        RouterModule
    ]
  })
  export class DepartamentosRoutingModule { }
  