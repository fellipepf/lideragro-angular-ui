import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UnidadeMedidaService } from 'src/app/unidadeMedida/unidade-medida.service';
import { ProdutoService } from '../produto.service';
import { Produto } from 'src/app/core/model';

import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';
import { CategoriaService } from 'src/app/categoria/categoria.service';


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

  unidades = [];
  categorias = [];
  produto = new Produto();


  constructor(
    private unidadeMedidaService: UnidadeMedidaService,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private toasty: ToastyService,
    private erroHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.carregarUnidadeMedida();
    this.carregarCategoria();
  }

  salvar(){
    console.log(this.produto);
    this.produtoService.adicionar(this.produto)
    .subscribe(() => {
 
      this.toasty.success('Produto adicionado com sucesso');
    },
    erro => this.erroHandler.handle(erro)
    );

  }

  carregarUnidadeMedida(){
    return this.unidadeMedidaService.listarTodas()
  //   .pipe(
  //     map((data: any[]) => {
  //       this.unidades = data.map( c => ({ label: c.nome, value: c.id} ));
       
  //     }),
  //  )
    
      .subscribe( unidades => {
      
        this.unidades = unidades
         .map( c => ({ label: c.nome, value: c.id} ))
        
      });
     
     
  }

  carregarCategoria(){
    return this.categoriaService.listarTodas()
      .subscribe( categorias => {
      
        this.categorias = categorias
         .map( c => ({ label: c.nome, value: c.id} ))
        
      });
     
     
  }
}
