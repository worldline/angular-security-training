import {Injectable, Inject} from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Observable} from 'rxjs';






import {Book, Comment} from '../beans/book';


@Injectable()
export class BooksService{

	private books: Observable<Book>;

	constructor(private http: HttpClient){}

	getBooks= (): Observable<Book> => {

		return this.http.get('/api/products')
			.do((books: Book[]) => {
				this.books = Observable.from(books);
			})
			.flatMap((books: Book[]) => {
				return this.books;
			})
			.do((book: Book) => {
				this.includeRating(book);
			});
	}

	getBook= (id: number): Observable<Book> => {
		return this.http.get<Book>(`/api/products/${id}`)
			.do((book: Book) => {
				this.includeRating(book);
			});
	}

	getRatingAverage = (book: Book):number => {

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
	}

	private includeRating= (book: Book): void => {
		book.rating = this.getRatingAverage(book);
	}


	convertFromRating= (rate: number): string => {

		if (!rate || rate < 0 || rate > 5){
			return undefined;
		}

		let classes = ['zero', 'one', 'two', 'three', 'four', 'five'];

		return classes[rate];
	}


	getRatingClass = (book: Book): string => {

		let classes = ['zero', 'one', 'two', 'three', 'four', 'five'];

		if (!book.comments){
			return undefined;
		}

		let average = book.rating || this.getRatingAverage(book);

		return 'rating ' + this.convertFromRating(average);
	}

}