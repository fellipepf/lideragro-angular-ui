import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService, ProdutoFiltro } from '../produto.service';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';

import { ToastyService } from 'ng2-toasty';

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
    private toasty: ToastyService,
    private confirmation: ConfirmationService) {

  }

  ngOnInit() {
    // this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.produtoService.pesquisar(this.filtro)
      .then(
        resultado => {
          this.produtos = resultado.produtos,
            this.totalRegistros = resultado.total

        });
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
      }
      );
  }
}
