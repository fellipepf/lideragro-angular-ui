import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { LoginComponent } from './login/login.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { Http, RequestOptions } from '@angular/http';
import { environment } from 'src/environments/environment';


export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),

    ButtonModule,
    InputTextModule,
    
    SegurancaRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [
    
  ]
})
export class SegurancaModule { }
