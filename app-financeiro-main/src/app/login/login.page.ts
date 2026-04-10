import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario{
  nome:string;
  senha:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})

export class LoginPage implements OnInit {

    usuario= {
    nome: '',
    senha: '',
  }

  usuariosCadastrados: Usuario[] = [];

  cadastrarUsuario(){
    const nome = this.usuario.nome.trim();
    const senha = this.usuario.senha;

    if(!nome || !senha){
      return;
    }

    this.usuariosCadastrados.unshift({nome, senha});
    this.limparFormulario();

  }

  limparFormulario(){
    this.usuario ={
      nome: '',
      senha:'',
    }
  }

  excluirUsuario(index: number){
    this.usuariosCadastrados.splice(index, 1);
  }

    login() {
    const encontrado = this.usuariosCadastrados.find(
      u => u.nome === this.usuario.nome && u.senha === this.usuario.senha
    );

    if (encontrado) {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/menu']);
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}