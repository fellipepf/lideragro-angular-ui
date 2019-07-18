import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { LiderHttp } from './lider-http';

@Injectable()
export class LogoutService {

  tokensRenokeUrl: string;

  constructor(
    private http: LiderHttp,
    private auth: AuthService
  ) {
    this.tokensRenokeUrl = `${environment.apiURL}/token/revoke`;
  }

  logout() {
    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });
  }

}