import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {UserService} from '../services/userService';
import {BooksService} from '../services/booksService';
import {Book} from '../beans/book';


@Component({
	selector: 'book-details',
	templateUrl: 'bookDetails.html',
	styleUrls: ['bookDetails.css']
})
export class BookDetails implements OnInit{

	public book: Book;

	constructor(
		private currentRoute: ActivatedRoute,
		private router: Router,
		public bookService: BooksService,
		public userService: UserService){}

	ngOnInit(): void {
		let that = this;
		this.currentRoute.params
		.flatMap(
			( params: { [key: string]: any } ) => {
				let bookIdStr= params['id'];
				if (!bookIdStr){
					throw 'Book Id not set';
				}
				
				let bookId = parseInt(bookIdStr);
				return this.bookService.getBook(bookId);
			}
		).subscribe( (book: Book) => this.book= book );

	}


	getImagePath = (): string => {
		if (!this.book){
			return '';
		}
		return '/data/imgs/books/' + this.book.id + '.jpg';
	}


	getStarsImagePath= (): string => {
		if (!this.book){
			return '';
		}

		return 'assets/styles/ktheme/img/' + this.bookService.convertFromRating(this.bookService.getRatingAverage(this.book)) + '-stars.svg'
	}


	addToBasket= (): void => {
		this.userService.basket.addProduct(this.book);
		this.router.navigate(['basket']);
	}


}
