import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Departamento } from '../core/model';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  departamentoUrl = 'http://localhost:8080/departamento';

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<any> {

    return this.http.get<any>(`${this.departamentoUrl}`)
      .map(response => {
       
        const categorias = response;

        return categorias;

      });
  }

  adicionar(departamento: Departamento): Observable<Departamento> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.post<Departamento>(this.departamentoUrl, JSON.stringify(departamento), { headers })
      .pipe();
  }

  excluir(id: number): Observable<void> {
    return this.http.delete(`${this.departamentoUrl}/${id}`)
      .map(() => null);
  }

  atualizar(departamento: Departamento): Observable<Departamento> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.put<Departamento>(`${this.departamentoUrl}/${departamento.id}`, JSON.stringify(departamento), { headers })
    .map(
      products => {
      return products; 
      
       } );
  }

  buscarPorId(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.departamentoUrl}/${id}`)
    .map(
      departamento => {
      return departamento; 
      
       } );
  }
}
