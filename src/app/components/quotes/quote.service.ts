import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quote/quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private readonly API = 'http://localhost:3000/quotes';
  constructor(private http: HttpClient) {}

  listar(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.API);
  }

  criar(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(this.API, quote);
  }

  excluir(id: number): Observable<Quote> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Quote>(url);
  }

  buscarPorId(id: number): Observable<Quote> {
    const url = `${this.API}/${id}`;
    return this.http.get<Quote>(url);
  }

  editar(quote: Quote): Observable<Quote> {
    const url = `${this.API}/${quote.id}`;
    return this.http.put<Quote>(url, quote);
  }
}
