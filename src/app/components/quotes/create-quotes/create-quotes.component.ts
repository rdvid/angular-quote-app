import { Quote } from './../quote/quote';
import { QuoteService } from './../quote.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quotes',
  templateUrl: './create-quotes.component.html',
  styleUrls: ['./create-quotes.component.css'],
})
export class CreateQuotesComponent implements OnInit {
  pensamento: Quote = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private service: QuoteService, private router: Router) {}

  ngOnInit(): void {}

  salvar() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listQuote']);
    });
  }

  cancelar() {
    return this.router.navigate(['/listQuote']);
  }
}
