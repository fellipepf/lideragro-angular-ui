import { Component, OnInit, ViewChild } from '@angular/core';

import { Categoria } from 'src/app/core/model';
import { CategoriaService } from '../categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

  categoria = new Categoria();
  categorias: Array<any>;
  @ViewChild('tabela') grid;

  constructor(
    private categoriaService: CategoriaService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.pesquisar();
  }
  pesquisar() {
    
    this.categoriaService.listarTodas()
      .subscribe(
        resultado => {
          this.categorias = resultado

        })
        erro => this.errorHandler.handle(erro);
    // .then(produtos => this.produtos = produtos);
  }
}
