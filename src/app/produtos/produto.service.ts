import { Injectable } from '@angular/core';
import { HttpHeaders  } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { map } from "rxjs/operators";
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { Produto } from '../core/model';
import { JwtModule } from '@auth0/angular-jwt';
import { LiderHttp } from '../seguranca/lider-http';
import { environment } from 'src/environments/environment';

export class ProdutoFiltro {
  constructor() { }

  nome: string;
  codigo: number;
  codigoBarras: number;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})



export class ProdutoService {

  produtosUrl :string;

  constructor(private http: LiderHttp) {
    this.produtosUrl = `${environment.apiURL}/produto`;
   }

  pesquisar(filtro: ProdutoFiltro): Promise<any> {
    let params = new HttpParams();


    params = params.append('page', filtro.pagina.toString());
    params = params.append('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.append('nome', filtro.nome.trim())
    }

    if (filtro.codigoBarras) {
      params = params.append('codigoBarras', filtro.codigoBarras.toString())
    }

    if (filtro.codigo) {
      params = params.append('id', filtro.codigo.toString())
    }

    return this.http.get<any>(`${this.produtosUrl}?resumo`, { params,withCredentials: true })
      .toPromise()
      .then(response => {
        let produtos = response.content;

        const resultado = {
          produtos,
          total: response.totalElements
        };

      return resultado;
      });
  }

  excluir(id: number): Observable<void> {
    return this.http.delete(`${this.produtosUrl}/${id}`)
      .map(() => null);
  }

  adicionar(produto: Produto): Observable<Produto>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    return this.http.post<Produto>(this.produtosUrl, JSON.stringify(produto) )
    .pipe();
}

  /*
    return this.http.get(`${this.produtosUrl}?resumo`)
      .toPromise()
      .then(response => {
        );
      }
      )




 pesquisar() {
   return this.http.get(`${this.produtosUrl}`)
 }*/

  atualizar(produto: Produto): Observable<Produto> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.put<Produto>(`${this.produtosUrl}/${produto.id}`, JSON.stringify(produto), { headers })
    .map(
      products => {
      return products; 
      
       } );
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.produtosUrl}/${id}`)
    .map(
      products => {
      return products; 
      
       } );
       
  }
}
