import { Book } from '../../models/book';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { MatTableDataSource, MatPaginator} from '@angular/material';

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
  // isDisabled = false;
  // data: string;
  // showFullList: boolean;
  // filterValue: string;
  filterString = 'enter author name';
  datasource: MatTableDataSource<Book>;
  displayedColumns: string[];
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    // this.showFullList = true;
    // this.filterValue = 'no';
    this.showBooksList();
    this.displayedColumns = ['id', 'name', 'author', 'publishYear', 'price', 'stockCount'];
  }


showBooksList() {
this.bookService.getAllBooks()
  .subscribe(res => {
    this.books = res;
    this.datasource = new MatTableDataSource<Book>(this.books);
   });
  }


// extractAuthors () {
//   this.bookService.getAllBooks()
//   .subscribe(res => {
//     this.booksList = res;
//     console.log (this.booksList);
//     });
// }

sortByName() {
  this.bookService.sortByName()
  .subscribe(res => {
    this.books = res;
    this.datasource = new MatTableDataSource<Book>(this.books);
  });
}


sortByID() {
  this.bookService.sortByID()
  .subscribe(res => {
    this.books = res;
    this.datasource = new MatTableDataSource<Book>(this.books);
  });
}

// filterListByAuthor(filterValue: string) {

//   this.showFullList = false;
//   this.bookService.getAllBooks().subscribe((books: Book[]) => {
//     this.filteredBooks = books.filter((book) => book.author === filterValue);
//     });
//   }

  filterListByAuthor(filterValue: string) {

    // this.showFullList = false;
    // this.isDisabled = false;
    console.log (filterValue + 'filter value');
    this.bookService.filterByAuthor(filterValue).subscribe((books: Book[]) => {
      this.books = books.filter((book) => book.author === filterValue);
      this.datasource = new MatTableDataSource<Book>(this.books);
      console.log(this.books);
      });
      // if (filterValue === undefined) {this.isDisabled = true; }
     }

isDisabled(): boolean {

  if (this.books.length === 0 ) {return true; }

}

 
}

