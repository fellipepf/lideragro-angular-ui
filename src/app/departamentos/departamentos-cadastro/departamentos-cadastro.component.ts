import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/core/model';

@Component({
  selector: 'app-departamentos-cadastro',
  templateUrl: './departamentos-cadastro.component.html',
  styleUrls: ['./departamentos-cadastro.component.css']
})
export class DepartamentosCadastroComponent implements OnInit {

  departamento = new Departamento();

  constructor() { }

  ngOnInit() {
  }

}
