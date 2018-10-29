import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ProdutoService, ProdutoFiltro } from '../produto.service';

@Component({
  selector: 'app-produtos-busca',
  templateUrl: './produtos-busca.component.html',
  styleUrls: ['./produtos-busca.component.css']
})

export class ProdutosBuscaComponent implements OnInit {

  produtos: Array<any>;
  filtro = new ProdutoFiltro();
  totalRegistros = 0;
  @ViewChild('tabela') grid;

  constructor(
    private produtoService: ProdutoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private title: Title
    ) {

  }

  ngOnInit() {
    this.title.setTitle('Busca de Produtos');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.produtoService.pesquisar(this.filtro)
      .then(
        resultado => {
          this.produtos = resultado.produtos,
            this.totalRegistros = resultado.total

        })
        .catch(erro => this.errorHandler.handle(erro));
    // .then(produtos => this.produtos = produtos);
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confimarExclusao(produto: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(produto);

      }
    });
  }


  excluir(produto: any) {
    this.produtoService.excluir(produto.id)
      .subscribe(() => {
        this.pesquisar();
        if (this.grid.first !== 0) {
          this.grid.first = 0;
        }

        this.toasty.success('Produto excluido com sucesso');
      },
      erro => this.errorHandler.handle(erro)
      );
  }
}
