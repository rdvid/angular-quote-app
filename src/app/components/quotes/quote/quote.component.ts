import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  @Input() quote = {
    conteudo: 'Component Singular',
    autoria: 'David',
    modelo: 'modelo3',
  };

  ngOnInit(): void {}

  quoteWidth(): string {
    if (this.quote.conteudo.length >= 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
