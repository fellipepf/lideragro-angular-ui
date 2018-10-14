import { Component, OnInit } from '@angular/core';
import { ProdutoService, ProdutoFiltro } from '../produto.service';

@Component({
  selector: 'app-produtos-busca',
  templateUrl: './produtos-busca.component.html',
  styleUrls: ['./produtos-busca.component.css']
})

export class ProdutosBuscaComponent implements OnInit {

  produtos: Array<any>;
  filtro = new ProdutoFiltro();

  constructor(private produtoService: ProdutoService) {

  }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {

    this.produtoService.pesquisar(this.filtro)
      .subscribe(response => this.produtos = response.content);
    // .then(produtos => this.produtos = produtos);
  }

}
