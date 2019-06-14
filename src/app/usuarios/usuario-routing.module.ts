import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsuarioCadastroComponent } from "./usuario-cadastro/usuario-cadastro.component";

const rotas: Routes = [
    { path: 'usuarios', component: UsuarioCadastroComponent },
    { path: 'usuarios/:id', component: UsuarioCadastroComponent },
    { path: 'usuarios/novo', component: UsuarioCadastroComponent }
  
  ];


@NgModule({
    imports: [
        RouterModule.forChild(rotas),
    ],
    exports: [
        RouterModule
    ]
  })
  export class UsuariosRoutingModule { }
  