import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/model';
import { UsuarioService } from '../usuario.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ConfirmationService } from 'primeng/components/common/api';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario = new Usuario();
  usuarios: Array<any>;

  constructor(
    private usuarioService: UsuarioService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private rota: ActivatedRoute,
    private router: Router,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de Usuario');


    this.rota.paramMap.subscribe((params: ParamMap) => {
      const idUsuario = this.rota.snapshot.params['id'];
      console.log(params);
      if (idUsuario && idUsuario !=='novo'){
        this.carregarUsuario(idUsuario);
      }
    
    this.listar();
  });
}

  get editandoUsuario(){
    return Boolean(this.usuario.codigo);
  }

  listar() {
    this.usuarioService.listarTodas()
      .subscribe(
        resultado => {
          this.usuarios = resultado

        }),
        erro => this.errorHandler.handle(erro);
    // .then(produtos => this.produtos = produtos);
  }

  adicionarUsuario(){
    this.usuarioService.adicionar(this.usuario)
    .subscribe(usuarioGravado => {

      this.toasty.success('Usuario adicionado com sucesso');
      console.log(usuarioGravado);
      this.listar();
      this.novo( new FormControl());
    },
    erro => this.errorHandler.handle(erro)
    );

  }

  
  novo(form: FormControl){
    form.reset(); 
    this.usuario = new Usuario();
    
   // this.router.navigateByUrl('/departamentos/novo');
    this.router.navigate(['/usuarios/novo']);
  }

  
  confimarExclusao(departamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(departamento);

      }
    });
  }
  excluir(usuario: any) {
    this.usuarioService.excluir(usuario.codigo)
      .subscribe(() => {
        this.listar();

        this.toasty.success('Usuário excluido com sucesso');
      },
      erro => this.errorHandler.handle(erro)
      );
  }

  atualizarUsuario(){
    this.usuarioService.atualizar(this.usuario)
    .subscribe(usuario => {
      this.usuario = usuario;
 
      this.toasty.success('Usuario atualizado com sucesso');
      this.atualizarTituloEdicao();

      this.router.navigate(['/usuarios']);
    },
    erro => this.errorHandler.handle(erro)
    );

  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de Usuário: ${this.usuario.nome}`);
  }

  //carrega departamento para edicao
  carregarUsuario(id: number){
    
    this.usuarioService.buscarPorId(id)
    .subscribe(departamento => {
      this.usuario = departamento;

      this.atualizarTituloEdicao();
    })
     erro => this.errorHandler.handle(erro)
  }

}
