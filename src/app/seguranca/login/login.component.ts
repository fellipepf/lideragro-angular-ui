import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { map, filter, catchError, mergeMap } from 'rxjs/operators'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router) { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/produtos']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

  ngOnInit() {
    if (!this.auth.isAccessTokenInvalido()){
      this.router.navigate(['/produtos']);
    }
  }

}
