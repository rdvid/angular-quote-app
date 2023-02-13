import { EditQuoteComponent } from './components/quotes/edit-quote/edit-quote.component';
import { DeleteQuoteComponent } from './components/quotes/delete-quote/delete-quote.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuotesComponent } from './components/quotes/list-quotes/list-quotes.component';
import { CreateQuotesComponent } from './components/quotes/create-quotes/create-quotes.component';

const routes: Routes = [
  {
    path: '',
    component: ListQuotesComponent,
  },
  {
    path: 'createQuote',
    component: CreateQuotesComponent,
  },
  {
    path: 'listQuote',
    component: ListQuotesComponent,
  },
  {
    path: 'quote/deleteQuote/:id',
    component: DeleteQuoteComponent,
  },
  {
    path: 'quote/editQuote/:id',
    component: EditQuoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
