import { Component, OnInit } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';

@Component({
  selector: 'app-relatorio-produtos',
  templateUrl: './relatorio-produtos.component.html',
  styleUrls: ['./relatorio-produtos.component.css']
})
export class RelatorioProdutosComponent implements OnInit {

  constructor(private relatoriosService: RelatoriosService) { }

  ngOnInit() {
  }

  gerar() {
    this.relatoriosService.relatorioProdutos()
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);

        window.open(url);
      });
  }

}
