import { Book } from '../../models/book';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  providers: [ BooksService ]
})
export class BooksListComponent implements OnInit {


  books: Book[];
  booksList: Book[];
  authorsList: string[];
  book: Book;
  // data: string;
  showFullList: boolean;
  // filterValue: string;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.showFullList = true;
    // this.filterValue = 'no';
    this.showBooksList();
    this.extractAuthors ();
  }


showBooksList() {
this.bookService.getAllBooks()
  .subscribe(res => {
    this.books = res;
    });
  }


extractAuthors () {
  this.bookService.getAllBooks()
  .subscribe(res => {
    this.booksList = res;
    console.log (this.booksList);
    });
}

sortByName() {
  this.bookService.sortByName()
  .subscribe(res => {
    this.books = res;
  });
}

// filterListByAuthor(filterValue: string) {

//   this.showFullList = false;
//   this.bookService.getAllBooks().subscribe((books: Book[]) => {
//     this.filteredBooks = books.filter((book) => book.author === filterValue);
//     });
//   }

  filterListByAuthor(filterValue: string) {

    this.showFullList = false;
    this.bookService.filterByAuthor(filterValue).subscribe((books: Book[]) => {
      this.books = books.filter((book) => book.author === filterValue);
      });
    }


 
}

