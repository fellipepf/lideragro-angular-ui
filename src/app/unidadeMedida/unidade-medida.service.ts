import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class UnidadeMedidaService {
  unidadeMedidaUrl = 'http://localhost:8080/unidade';

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<any> {
    return this.http.get<any>(`${this.unidadeMedidaUrl}`,)
     ;

  }
}
