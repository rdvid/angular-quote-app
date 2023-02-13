import { Router, ActivatedRoute } from '@angular/router';
import { QuoteService } from './../quote.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote/quote';

@Component({
  selector: 'app-delete-quote',
  templateUrl: './delete-quote.component.html',
  styleUrls: ['./delete-quote.component.css'],
})
export class DeleteQuoteComponent implements OnInit {
  quote: Quote = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((quote) => {
      this.quote = quote;
    });
  }

  deleteQuote() {
    if (this.quote.id) {
      this.service.excluir(this.quote.id).subscribe(() => {
        this.router.navigate(['/listQuote']);
      });
    }
  }

  cancel() {
    return this.router.navigate(['/listQuote']);
  }

  constructor(
    private service: QuoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
