import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: false
})
export class PagarPage implements OnInit {
  item = {
    nome: 'Internet Mensal',
    vencimento: '10/12/2024',
    pagamento: 'Pendente',
    valor: '99,90'
  };
  
  listaPagar = [
    { nome: 'Energia Elétrica', vencimento: '05/12', valor: '210,00' },
    { nome: 'Aluguel Sala', vencimento: '08/12', valor: '1200,00' }
  ];

  acaoPlus() { console.log('Novo pagamento'); }
  acaoMinus() { console.log('Remover pagamento'); }

  constructor() { }

  ngOnInit() {
  }

}
