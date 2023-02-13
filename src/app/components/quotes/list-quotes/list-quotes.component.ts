import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote/quote';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css'],
})
export class ListQuotesComponent implements OnInit {
  quoteList: Quote[] = [];

  constructor() {}

  ngOnInit(): void {}
}
