import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'books';

  private bookIndex = 0;
  public book = {
    bookId: Number,
    bookTitle: String,
    bookDescription: String,
    bookAuthor: String,
    bookReview: Number,
  };

  private bookTitles = ['imalo edno vreme'];

  private bookAuthors = ['Ivan Vasov', 'Hristo Botev', 'Petq Dubarova', 'Ivan'];

  private bookDescriptions = ['mnogo gotina kniga'];

  private bookReviews = [0];

  public activeBook = {
    bookTitle: this.bookTitles[this.bookIndex],
    bookAuthor: this.bookAuthors[this.bookIndex],
    bookDescription: this.bookDescriptions[this.bookIndex],
    bookReview: this.bookReviews[this.bookIndex],
  };

  private nextBook(): void {
    this.bookIndex++;
    if (this.bookIndex < this.bookTitles.length) this.loadBookInfo();
    else {
      this.loadBookInfo();
    }
  }

  private loadBookInfo(): void {
    this.bookTitles[this.bookIndex];
    this.bookAuthors[this.bookIndex];
    this.bookDescriptions[this.bookIndex];
    this.bookReviews[this.bookIndex];
  }
}
