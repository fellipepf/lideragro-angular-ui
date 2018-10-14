import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

export class ProdutoFiltro {
  constructor() {}

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

  pesquisar(filtro: ProdutoFiltro): Observable<any> {
    let params = new HttpParams();
    //const headers = new Headers();
   
    params = params.append('page', filtro.pagina.toString());
    params = params.append('size', filtro.itensPorPagina.toString());
   
    if (filtro.nome){
      params = params.append('nome', filtro.nome.trim())
    }

    if (filtro.codigoBarras){
      params = params.append('codigoBarras', filtro.codigoBarras.toString())
    }

    if (filtro.codigo){
      params = params.append('id', filtro.codigo.toString())
    }

    return this.http.get<any>(`${this.produtosUrl}?resumo`, { params}  );

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
}
