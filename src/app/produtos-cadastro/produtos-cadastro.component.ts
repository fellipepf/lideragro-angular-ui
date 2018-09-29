import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`]
})
export class ProdutosCadastroComponent implements OnInit {

  unidade = [
    {label: 'Unidade', Value: 1},
    {label: 'Pacote', Value: 2},
  ];

  constructor() { }

  ngOnInit() {
  }

}
