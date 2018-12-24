
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books-list/books-list.component'


@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, MatProgressSpinnerModule, HttpClientModule],
  declarations: [BooksListComponent],
  exports: [BooksListComponent],
})
export class ComponentsModule {}
