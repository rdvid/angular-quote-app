import { Router, ActivatedRoute } from '@angular/router';
import { QuoteService } from './../quote.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote/quote';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css'],
})
export class EditQuoteComponent implements OnInit {
  quote: Quote = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: QuoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((quote) => {
      this.quote = quote;
    });
  }

  editQuote() {
    this.service.editar(this.quote).subscribe((quote) => {
      this.router.navigate(['/listQuote']);
    });
  }

  cancel() {
    return this.router.navigate(['/listQuote']);
  }
}
