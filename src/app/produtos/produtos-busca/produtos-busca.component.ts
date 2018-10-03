import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-busca',
  templateUrl: './produtos-busca.component.html',
  styleUrls: ['./produtos-busca.component.css']
})
export class ProdutosBuscaComponent  {
  produtos = [
    {codigo: 1, nome: "Calminex", valor: 10.00},
    {codigo: 2, nome: "Calminex", valor: 10.00},
    {codigo: 3, nome: "Calminex", valor: 10.00},
    {codigo: 4, nome: "Calminex", valor: 10.00},
    {codigo: 5, nome: "Calminex", valor: 10.00},
    {codigo: 6, nome: "Calminex", valor: 10.00},
    {codigo: 7, nome: "Calminex", valor: 10.00},
    {codigo: 8, nome: "Calminex", valor: 10.00},
    {codigo: 9, nome: "Calminex", valor: 10.00},
    {codigo: 40, nome: "Sela", valor: 90.00}

  ];

}
