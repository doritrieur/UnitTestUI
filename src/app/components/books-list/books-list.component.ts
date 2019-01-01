import { Book } from '../../models/book';
import { Component, OnInit} from '@angular/core';
import { BooksService } from '../../services/books.service';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  providers: [ BooksService ]
})
export class BooksListComponent implements OnInit {


  books: Book[];
  book: Book;
  filterString = '';
  datasource: MatTableDataSource<Book>;
  displayedColumns: string[];
  noBooks: boolean;


  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.noBooks = false;
    this.showBooksList();
    this.displayedColumns = ['id', 'name', 'author', 'publishYear', 'price', 'stockCount'];
  }


showBooksList() {
this.noBooks = false;
this.bookService.getAllBooks()
  .subscribe(res => {
    this.books = res;
    this.datasource = new MatTableDataSource<Book>(this.books);
    });
    this.filterString = '';
  }


sortByName() {
  this.noBooks = false;
  this.bookService.sortByName()
  .subscribe(res => {
    this.books = res;
    this.datasource = new MatTableDataSource<Book>(this.books);
  });
}


sortByID() {
  this.noBooks = false;
  this.bookService.sortByID()
  .subscribe(res => {
    this.books = res;
    this.datasource = new MatTableDataSource<Book>(this.books);
  });
}


  filterListByAuthor(filterValue: string) {

    this.bookService.filterByAuthor(filterValue).subscribe((books: Book[]) => {
      this.books = books.filter((book) => book.author === filterValue);
      this.datasource = new MatTableDataSource<Book>(this.books);
      if (this.books.length === 0) {
        this.noBooks = true; } else {this.noBooks = false; }
         });

      }
    }

