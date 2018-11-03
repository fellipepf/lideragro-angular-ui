import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { Categoria } from 'src/app/core/model';
import { CategoriaService } from '../categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { DepartamentoService } from 'src/app/departamentos/departamento.service';
import { ConfirmationService } from 'primeng/components/common/api';


@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

  categoria = new Categoria();
  categorias: Array<any>;
  departamentos: Array<any>;

  constructor(
    private categoriaService: CategoriaService,
    private departamentoService: DepartamentoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private rota: ActivatedRoute,
    private router: Router,
    private confirmation: ConfirmationService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Cadastro de Categoria');

        this.rota.paramMap.subscribe((params: ParamMap) => {
          const idCategoria = this.rota.snapshot.params['id'];
          console.log(idCategoria);
          if (idCategoria && idCategoria !=='novo'){
            this.carregarCategoria(idCategoria);
          }
      
          
          this.listar();
          this.carregarDepartamento();
      });
    
    

 
  }

  get editandoDepartamento(){
    return Boolean(this.categoria.id);
  }

  listar() {
    
    this.categoriaService.listarTodas()
      .subscribe(
        resultado => {
          this.categorias = resultado
          console.log(resultado);
        })
        erro => this.errorHandler.handle(erro);
    // .then(produtos => this.produtos = produtos);
  }

  salvar() {
    if (this.editandoDepartamento) {
      this.atualizarCategoria();
    } else {
      this.adicionarCategoria();
    }

  }

  adicionarCategoria(){
    this.categoriaService.adicionar(this.categoria)
    .subscribe(categoriaGravado => {

      this.toasty.success('Categoria adicionado com sucesso');
      console.log(categoriaGravado);
      this.listar();
    },
    erro => this.errorHandler.handle(erro)
    );

  }

  atualizarCategoria(){
    this.categoriaService.atualizar(this.categoria)
    .subscribe(categoria => {
      this.categoria = categoria;
 
      this.toasty.success('Produto atualizado com sucesso');
      this.atualizarTituloEdicao();
    },
    erro => this.errorHandler.handle(erro)
    );

  }

  confimarExclusao(categoria: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(categoria);

      }
    });
  }


  excluir(categoria: any) {
    this.categoriaService.excluir(categoria.id)
      .subscribe(() => {
        this.listar();

        this.toasty.success('Categoria excluido com sucesso');
      },
      erro => this.errorHandler.handle(erro)
      );
  }

  carregarDepartamento(){
    return this.departamentoService.listarTodas()
    .subscribe( departamentos => {
    
      this.departamentos = departamentos
       .map( c => ({ label: c.nome, value: c.id} ))
      
    });
  }
  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de Categoria: ${this.categoria.nome}`);
  }
    //carrega departamento para edicao
    carregarCategoria(id: number){
    
      this.categoriaService.buscarPorId(id)
      .subscribe(categoria => {
        this.categoria = categoria;
  
        this.atualizarTituloEdicao();
      })
       erro => this.errorHandler.handle(erro)
    }
  
    novo(form: FormControl){
      form.reset(); 
      this.categoria = new Categoria();
      
     // this.router.navigateByUrl('/departamentos/novo');
      this.router.navigate(['/categorias/novo']);
    }
}
