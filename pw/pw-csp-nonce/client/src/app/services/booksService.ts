import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { flatMap, Observable, of, tap } from 'rxjs';

import { Book, Comment } from '../beans/book';

@Injectable()
export class BooksService {
  private books = new Observable<Book[]>();

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    this.books = this.http.get<Book[]>('/api/products').pipe(
      tap((books: Book[]) => {
        books.forEach((book) => this.includeRating(book));
      })
    );
    return this.books;
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/products/${id}`).pipe(
      tap((book) => {
        this.includeRating(book);
      })
    );
  }

  getRatingAverage = (book: Book): number => {
    let total = 0;

    if (!book.comments) {
      return -1;
    }

    book.comments.forEach((comment: Comment, indice: number) => {
      if (comment.rate !== undefined) {
        total += comment.rate;
      }
    });

    return Math.floor(total / book.comments.length);
  };

  private includeRating = (book: Book): void => {
    book.rating = this.getRatingAverage(book);
  };

  convertFromRating(rate?: number): string | undefined {
    if (!rate || rate < 0 || rate > 5) {
      return undefined;
    }

    const classes = ['zero', 'one', 'two', 'three', 'four', 'five'];
    return classes[rate];
  }

  getRatingClass(book: Book): string | undefined {
    if (!book.comments) {
      return undefined;
    }
    let average = book.rating || this.getRatingAverage(book);
    return 'rating ' + this.convertFromRating(average);
  }
}
