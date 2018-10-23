import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl = 'http://localhost:8080/categoria';

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<void> {
    return this.http.get<any>(`${this.categoriaUrl}`,)
     ;

  }
}
