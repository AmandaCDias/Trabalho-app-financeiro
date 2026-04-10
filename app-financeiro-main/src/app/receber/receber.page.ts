import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false
})
export class ReceberPage implements OnInit {
  item = {
    cliente: 'Empresa ABC',
    vencimento: '20/12/2024',
    pagamento: 'Pendente',
    valor: '450,00'
  }
  
  listaReceber = [
    { cliente: 'João Silva', vencimento: '15/12', valor: '100,00' },
    { cliente: 'Maria Souza', vencimento: '18/12', valor: '350,00' }
  ];

  acaoPlus() { console.log('Adicionar item'); }
  acaoMinus() { console.log('Remover item'); }

  constructor() { }

  ngOnInit() {
  }

}

