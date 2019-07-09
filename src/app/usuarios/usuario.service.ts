import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Usuario } from '../core/model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl :string;

  constructor(private http: HttpClient) {
    this.usuarioUrl = `${environment.apiURL}/usuario`;
   }

  listarTodas(): Observable<any> {

    return this.http.get<any>(`${this.usuarioUrl}`)
      .map(response => {
       console.log(response);
        const usuarios = response;

        return usuarios;

      });
  }

  adicionar(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.post<Usuario>(this.usuarioUrl, JSON.stringify(usuario), { headers })
      .pipe();
  }

  excluir(id: number): Observable<void> {
    return this.http.delete(`${this.usuarioUrl}/${id}`)
      .map(() => null);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.put<Usuario>(`${this.usuarioUrl}/${usuario.codigo}`, JSON.stringify(usuario), { headers })
    .map(
      products => {
      return products; 
      
       } );
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usuarioUrl}/${id}`)
    .map(
      usuario => {
      return usuario; 
      
       } );
  }
}
