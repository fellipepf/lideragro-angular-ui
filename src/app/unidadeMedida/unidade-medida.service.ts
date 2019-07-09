import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UnidadeMedidaService {
  unidadeMedidaUrl :string;

  constructor(private http: HttpClient) {
    this.unidadeMedidaUrl = `${environment.apiURL}/unidade`;
   }

  listarTodas(): Observable<any> {
    return this.http.get<any>(`${this.unidadeMedidaUrl}`,)
     ;

  }
}
