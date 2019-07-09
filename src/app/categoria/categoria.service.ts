import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Categoria } from '../core/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl :string;

  constructor(private http: HttpClient) {
    this.categoriaUrl = `${environment.apiURL}/categoria`;
   }

  listarTodas(): Observable<any> {
    return this.http.get<any>(`${this.categoriaUrl}`)
      .map(response => {
        let categorias = response;

        return categorias;

      });
  }

  adicionar(categoria: Categoria): Observable<Categoria> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.post<Categoria>(this.categoriaUrl, JSON.stringify(categoria), { headers })
      .pipe();
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.put<Categoria>(`${this.categoriaUrl}/${categoria.id}`, JSON.stringify(categoria), { headers })
      .map(
        categoria => {
          return categoria;

        });
  }
  
  excluir(id: number): Observable<void> {
    return this.http.delete(`${this.categoriaUrl}/${id}`)
      .map(() => null);
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.categoriaUrl}/${id}`)
      .map(
        categoria => {
          return categoria;

        });
  }
}
