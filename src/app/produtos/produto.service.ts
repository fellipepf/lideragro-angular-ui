import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { map } from "rxjs/operators";
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { Produto } from '../core/model';

export class ProdutoFiltro {
  constructor() { }

  nome: string;
  codigo: number;
  codigoBarras: number;
  pagina = 0;
  itensPorPagina = 3;
}

@Injectable({
  providedIn: 'root'
})



export class ProdutoService {

  produtosUrl = 'http://localhost:8080/produto';

  constructor(private http: HttpClient) { }

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

    return this.http.get<any>(`${this.produtosUrl}?resumo`, { params })
      .toPromise()
      .then(response => {
        let produtos = response.content;

        let resultado = {
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

    return this.http.post<Produto>(this.produtosUrl, JSON.stringify(produto), {headers} )
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
