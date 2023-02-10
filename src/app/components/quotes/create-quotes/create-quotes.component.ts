import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quotes',
  templateUrl: './create-quotes.component.html',
  styleUrls: ['./create-quotes.component.css'],
})
export class CreateQuotesComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'aprendendo angular',
    autoria: 'Dev',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  salvar() {
    alert('salvar');
  }

  cancelar() {
    alert('cancelar');
  }
}
