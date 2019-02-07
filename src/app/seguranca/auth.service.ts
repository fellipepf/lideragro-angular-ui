import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelper) { 
    this.carregarToken();
  }

  login(usuario: string, senha: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy'); //angular:@ngul@r

    const body = `username=${usuario}&password=${senha}&grant_type=password&client=angular`;

    return this.http.post<any>(this.oauthTokenUrl, body, { headers })
      .subscribe(
        response => {
          console.log(response);
          
          this.armazenarToken(response.access_token);
        }),
      error => {
        console.log("Error!!!", error);

      };
    /*
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
        console.log('Client-side error occured.');
    } else {
        console.log('Server-side error occured.');
    }
};*/


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
