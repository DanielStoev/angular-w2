import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'books';

  public ratingBooks = true;
  public showResults = false;

  private bookIndex = 0;
  public sumRating = 0;
  public totalReviews = 0;

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

  public activeBook = {
    bookTitle: this.bookTitles[this.bookIndex],
    bookAuthor: this.bookAuthors[this.bookIndex],
    bookDescription: this.bookDescriptions[this.bookIndex],
  };

  public saveBookChanges(
    title: string,
    author: string,
    description: string,
    rating: number
  ): void {
    this.bookTitles[this.bookIndex] = title;
    this.bookAuthors[this.bookIndex] = author;
    this.bookDescriptions[this.bookIndex] = description;
    this.sumRating += rating;

    this.nextBook();
  }

  public startRatingAgain(): void {
    this.bookIndex = 0;
    this.ratingBooks = true;
  }

  public stopRating(): void {
    this.showResults = true;
  }

  public calculateRating(): number {
    return Math.round((this.sumRating / this.totalReviews + Number.EPSILON) * 100) / 100;
  }

  private nextBook(): void {
    this.bookIndex++;
    this.totalReviews++;
    if (this.bookIndex < this.bookTitles.length) {
      this.loadBookInfo();
    } else {
      this.ratingBooks = false;
      this.bookIndex = 0;
      this.loadBookInfo();
    }
  }

  private loadBookInfo(): void {
    this.activeBook.bookTitle = this.bookTitles[this.bookIndex];
    this.activeBook.bookAuthor = this.bookAuthors[this.bookIndex];
    this.activeBook.bookDescription = this.bookDescriptions[this.bookIndex];
  }
}