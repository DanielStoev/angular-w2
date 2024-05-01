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

  private bookTitles = [
    'Калейдоскоп',
    'Някъде там',
    'В сянката на ядрото',
    'Тела и светове',
    'Вдън нещата',
  ];

  private bookAuthors = [
    'Албена Кузманова',
    'Красимир Бачков',
    'Николай Ников',
    'Сергей Герджиков',
    'Христо Кърджилов',
  ];

  private bookDescriptions = [
    'Стихосбирка съдържаща четиридесет и шест стихотворения, условно разделени в шест цикъла: „Стихии“, „Из живота на морето“, „Огледала“ „Майчинство“, „В себе си…“, „… и Отвъд“',
    'Книгата съдържа разкази и новели от Красимир Бачков.',
    '„В сянката на ядрото“ е роман, който разкрива  същността  на случайно попаднали хора в една от най-мащабните трансформации на общественото устройство на света.',
    'Тази книга е художествен експеримент и има тема: живите тела и световете. Каквото е тялото, такъв е светът, който то възприема.',
    '24 разказа, построени по класическата формула „запетайка плюс но“.',
  ];

  private bookReviews = [0, 0, 0, 0, 0];

  public activeBook = {
    bookTitle: this.bookTitles[this.bookIndex],
    bookAuthor: this.bookAuthors[this.bookIndex],
    bookDescription: this.bookDescriptions[this.bookIndex],
    bookReview: this.bookReviews[this.bookIndex],
  };

  public saveBookChanges(
    title: string,
    author: string,
    description: string,
    review: string
  ): void {
    this.bookTitles[this.bookIndex] = title;
    this.bookAuthors[this.bookIndex] = author;
    this.bookDescriptions[this.bookIndex] = description;
    this.bookReviews[this.bookIndex] = parseInt(review);

    this.nextBook();
  }

  private nextBook(): void {
    this.bookIndex++;
    if (this.bookIndex < this.bookTitles.length) {
      this.loadBookInfo();
    } else {
      this.bookIndex = 0;
      this.loadBookInfo();
    }
  }

  private loadBookInfo(): void {
    this.activeBook.bookTitle = this.bookTitles[this.bookIndex];
    this.activeBook.bookAuthor = this.bookAuthors[this.bookIndex];
    this.activeBook.bookDescription = this.bookDescriptions[this.bookIndex];
    this.activeBook.bookReview = this.bookReviews[this.bookIndex];
  }
}
