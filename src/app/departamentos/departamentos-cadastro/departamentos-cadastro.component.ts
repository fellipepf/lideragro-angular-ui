import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';

import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/api';

import { Departamento } from 'src/app/core/model';
import { DepartamentoService } from '../departamento.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-departamentos-cadastro',
  templateUrl: './departamentos-cadastro.component.html',
  styleUrls: ['./departamentos-cadastro.component.css']
})
export class DepartamentosCadastroComponent implements OnInit {

  departamento = new Departamento();
  departamentos: Array<any>;

  constructor(
    private departamentoService: DepartamentoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private rota: ActivatedRoute,
    private router: Router,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de Departamento');

/*
Instead of taking values of parameter from "snapshot.params" you should subscribe to the activatedRoute 
By snapshot, Reloading do not occur when changing path parameters in url because constructor is not called. But using subscribe it will listen to the changes taking place in parameters.
*/


    this.rota.paramMap.subscribe((params: ParamMap) => {
      const idDepartamento = this.rota.snapshot.params['id'];
      console.log(idDepartamento);
      if (idDepartamento && idDepartamento !=='novo'){
        this.carregarDepartamento(idDepartamento);
      }
  
  
      this.listar();
  });


  }

  get editandoDepartamento(){
    return Boolean(this.departamento.id);
  }
  
  listar() {
    this.departamentoService.listarTodas()
      .subscribe(
        resultado => {
          this.departamentos = resultado

        }),
        erro => this.errorHandler.handle(erro);
    // .then(produtos => this.produtos = produtos);
  }

  adicionarDepartamento(){
    this.departamentoService.adicionar(this.departamento)
    .subscribe(departamentoGravado => {

      this.toasty.success('Produto adicionado com sucesso');
      console.log(departamentoGravado);
      this.listar();
      //this.router.navigate(['/produtos', produtoGravado.id]);
    },
    erro => this.errorHandler.handle(erro)
    );

  }

  confimarExclusao(departamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(departamento);

      }
    });
  }


  excluir(departamento: any) {
    this.departamentoService.excluir(departamento.id)
      .subscribe(() => {
        this.listar();

        this.toasty.success('Departamento excluido com sucesso');
      },
      erro => this.errorHandler.handle(erro)
      );
  }

  atualizarProduto(){
    this.departamentoService.atualizar(this.departamento)
    .subscribe(departamento => {
      this.departamento = departamento;
 
      this.toasty.success('Produto atualizado com sucesso');
      this.atualizarTituloEdicao();

      this.router.navigate(['/departamentos']);
    },
    erro => this.errorHandler.handle(erro)
    );

  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de Departamento: ${this.departamento.nome}`);
  }

  //carrega departamento para edicao
  carregarDepartamento(id: number){
    
    this.departamentoService.buscarPorId(id)
    .subscribe(departamento => {
      this.departamento = departamento;

      this.atualizarTituloEdicao();
    })
     erro => this.errorHandler.handle(erro)
  }

  novo(form: FormControl){
    form.reset(); 
    this.departamento = new Departamento();
    
   // this.router.navigateByUrl('/departamentos/novo');
    this.router.navigate(['/departamentos/novo']);
  }
}
