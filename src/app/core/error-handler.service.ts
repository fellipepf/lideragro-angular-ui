import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService
  ) { }

  handle(errorResponse: any){
    let msg: string;

    if (typeof errorResponse === 'string'){
      msg = errorResponse;
    } else{
      msg = 'Erro ao processo servico remoto. Tente novamente.';
      console.log('Erro!', errorResponse);
    }

    this.toasty.error(msg);
  }
}
