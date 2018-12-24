import { Book } from '../models/book';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs-compat';



@Injectable({
  providedIn: 'root'
})
export class BooksService {

   books: Observable<Book[]>;
  defaultURL = 'http://localhost:8080/v1/books';
  filterURL = 'http://localhost:8080/v1/books/filter_author/';
  sortByNameURL = 'http://localhost:8080/v1/books/sort_name';
  sortByIDURL = 'http://localhost:8080/v1/books/sort_id';

  constructor(private http: HttpClient ) {

     this.books = this.http
    .get<Book[]>(this.defaultURL);

    console.log(this.books + ' Observable books 1');
  }

  getAllBooks() {
    return this.books;
  }

filterByAuthor(author: string) {
  return this.books = this.http
  .get<Book[]>(this.filterURL + author);
}

sortByID() {
  return this.books = this.http
  .get<Book[]>(this.sortByNameURL);
}



sortByName() {
  return this.books = this.http
  .get<Book[]>(this.sortByIDURL);
}
  }

