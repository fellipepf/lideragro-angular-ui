import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const rotas: Routes = [
    { path: 'login', component: LoginComponent }
];


@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
  })
  export class SegurancaRoutingModule { }
  