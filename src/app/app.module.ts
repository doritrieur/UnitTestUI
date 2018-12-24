import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksService } from './services/books.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatSelectModule,
  MatListModule,
  MatExpansionModule,
  MatDividerModule
} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
