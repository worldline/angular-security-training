import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {NewsService} from '../services/newsService';
import {News} from '../beans/news';
// import {DomSanitizer} from '@angular/platform-browser'

@Component({
	selector: 'home',
	templateUrl: 'home.html',
	providers: [NewsService]
})
export class Home implements OnInit{

	message: string = 'Welcome in our shop!!!';
	news: News[];
	newsOfTheDay: News= {};
	nextNews: News = {};
	//trustedUrl: string;

	constructor(
		private newsService: NewsService,
		// private sanitizer: DomSanitizer
	) {}

	ngOnInit(){
		// javascript: URLs are dangerous if attacker controlled.
  		// Angular sanitizes them in data binding, but you can
  		// explicitly tell Angular to trust this value:
  		//this.trustedUrl = <string> this.sanitizer.bypassSecurityTrustUrl('javascript:alert("Don\'t forget to add a comment in the bottom please!")');
		this.updateNews();
	}

	updateNews= () => {
		this.newsService
			.getNews()
			.toArray()
			.subscribe((news: News[]) => {
				this.news = news;
			});


		this.newsService.randomNews()
		.subscribe((news: News) => {
			this.newsOfTheDay = news;
			// uncomment the line below only for demo purpose, don't do this in a real situation
      // if you want to force a given scripting which you trust and is under you strict control (never from user input), use DomSanitizer#bypassSecurityTrustHtml(String) method
      //this.newsOfTheDay.content = <string> this.sanitizer.bypassSecurityTrustHtml(this.newsOfTheDay.content);
		});
	}

	addLike= (news: News) => {
		this.newsService.addLike(news);
	}

	deleteNews= (news: News) => {
		this.newsService.deleteNews(news)
		.subscribe( (response: any) => {
			this.updateNews();
		} );
	}

	addNews= () => {
		this.nextNews.likes = 0;
		this.newsService.addNews(this.nextNews)
		.subscribe((response: any) => {
			this.updateNews();
		});
	}

}
