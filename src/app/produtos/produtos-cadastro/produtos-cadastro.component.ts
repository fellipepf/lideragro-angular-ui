import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UnidadeMedidaService } from 'src/app/unidadeMedida/unidade-medida.service';
import { ProdutoService } from '../produto.service';
import { Produto } from 'src/app/core/model';

import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';

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
    private erroHandler: ErrorHandlerService,
    private rota: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {

    this.title.setTitle('Cadastro de Produto');

    const idProduto = this.rota.snapshot.params['id'];
    if (idProduto){
      this.carregarProduto(idProduto);
    }

    this.carregarUnidadeMedida();
    this.carregarCategoria();
  }

  get editandoProduto(){
    return Boolean(this.produto.id);
  }

  carregarProduto(id: number){
    
    this.produtoService.buscarPorId(id)
    .subscribe(produto => {
      this.produto = produto;

      this.atualizarTituloEdicao();
    })
     erro => this.erroHandler.handle(erro)
  }

  salvar() {
    if (this.editandoProduto) {
      this.atualizarProduto();
    } else {
      this.adicionarProduto();
    }

  }

  adicionarProduto(){
    this.produtoService.adicionar(this.produto)
    .subscribe(produtoGravado => {

      this.toasty.success('Produto adicionado com sucesso');
      console.log(produtoGravado);
      this.router.navigate(['/produtos', produtoGravado.id]);
    },
    erro => this.erroHandler.handle(erro)
    );

  }

  atualizarProduto(){
    this.produtoService.atualizar(this.produto)
    .subscribe(produto => {
      this.produto = produto;
 
      this.toasty.success('Produto atualizado com sucesso');
      this.atualizarTituloEdicao();
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

  novo(form: FormControl){
    form.reset(); 
    this.produto = new Produto();
    
    this.router.navigate(['/produtos/novo']);
  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de Produto: ${this.produto.nome}`);
  }
}
