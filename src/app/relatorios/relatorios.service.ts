import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';



import { environment } from './../../environments/environment';
import { LiderHttp } from '../seguranca/lider-http';

@Injectable()
export class RelatoriosService {

  lancamentosUrl: string;

  constructor(private http: LiderHttp) {
    this.lancamentosUrl = `${environment.apiURL}/produtos`;
  }

  relatorioProdutos() {
    return this.http.get(`${this.lancamentosUrl}/relatorios`,
      { responseType: 'blob' })
      .toPromise();
  }
}