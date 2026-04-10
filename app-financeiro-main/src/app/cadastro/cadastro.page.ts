import { Component, OnInit } from '@angular/core';

interface Usuario {
  nome: string;
  tipo: string;
  endereco: string;

}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone:false
})

export class CadastroPage implements OnInit {

   usuario = {
    nome: '',
    tipo: '',
    endereco: '',
  };

  usuariosCadastrados: Usuario[] = [];

    cadastrarUsuario() {
    const nome = this.usuario.nome.trim();
    const tipo = this.usuario.tipo.trim();
    const endereco this.usuario.endereco.trim();

    if (!nome || !tipo || !endereco) {
      return;
    }

    this.usuariosCadastrados.unshift({ nome, tipo, endereco });
    this.limparFormulario();
  }

  limparFormulario() {
    this.usuario = {
      nome: '',
      tipo: '',
      endereco:'',
    };
  }

  excluirUsuario(index: number) {
    this.usuariosCadastrados.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
