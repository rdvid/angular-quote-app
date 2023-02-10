import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css'],
})
export class ListQuotesComponent implements OnInit {
  quoteList = [
    {
      conteudo: 'I love Angular',
      autoria: 'Rafael D',
      modelo: 'modelo3',
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Rafael D',
      modelo: 'modelo3',
    },
    {
      conteudo:
        'Contrary to popular belief, Lorem Ipsum is not simpasdsadsadsadsadsadsadsdsassasadsadsaaaaaaaaaaaaaaaaaaaaaaaaaasdContrary to popular belief, Lorem Ipsum is not simpasdsadsadsadsadsadsadsdsassasadsadsaaaaaaaaaaaaaaaaaaaaaaaaaasdContrary to popular belief, Lorem Ipsum is not simpasdsadsadsadsadsadsadsdsassasadsadsaaaaaaaaaaaaaaaaaaaaaaaaaasd',
      autoria: 'David',
      modelo: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
