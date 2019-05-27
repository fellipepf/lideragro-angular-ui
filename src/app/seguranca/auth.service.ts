import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { 
    this.carregarToken();
  }

  login(usuario: string, senha: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy'); //angular:@ngul@r

    const body = `username=${usuario}&password=${senha}&grant_type=password&client=angular`;

    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(
        response => {
          console.log(response);
          
          this.armazenarToken(response.access_token);
        },
        err => {
          console.log(JSON.stringify(err));

          if (err.status == 400){
            const responseJson = err.error;

            if (responseJson.error === 'invalid_grant'){
              console.log("usuario ou senha invalida");
              return Promise.reject("Usuário ou senha inválida!");
            }
          }
          return Promise.reject(err);
        }
      );

      };
    /*
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
        console.log('Client-side error occured.');
    } else {
        console.log('Server-side error occured.');
    }
};*/

obterNovoAccessToken(): Promise<void> {
  const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');

  const body = 'grant_type=refresh_token';

  return this.http.post<any>(this.oauthTokenUrl, body,
      { headers, withCredentials: true })
    .toPromise()
    .then(response => {
      this.armazenarToken(response.access_token);

      console.log('Novo access token criado!');

      return Promise.resolve(null);
    })
    .catch(response => {
      console.error('Erro ao renovar token.', response);
      return Promise.resolve(null);
    });
}

limparAccessToken() {
  localStorage.removeItem('token');
  this.jwtPayload = null;
}

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken(){
    const token = localStorage.getItem('token');

    if (token){
      this.armazenarToken(token);
    }
  }
}
