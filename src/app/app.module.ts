import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateQuotesComponent } from './components/quotes/create-quotes/create-quotes.component';
import { FormsModule } from '@angular/forms';
import { ListQuotesComponent } from './components/quotes/list-quotes/list-quotes.component';
import { QuoteComponent } from './components/quotes/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateQuotesComponent,
    ListQuotesComponent,
    QuoteComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
