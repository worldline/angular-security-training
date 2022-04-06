import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

import {News} from '../beans/news';

@Injectable()
export class NewsService{

	private theNews: Observable<News>;

	constructor(private http: HttpClient){}

	getNews= (): Observable<News> => {

  		if ( this.theNews !== undefined ){
  			return this.theNews;
  		}
  		
  		// CORS illustration : 
  		// force a cross-origin request with 
  		// - an explicit 'content-type' header
  		// - an abolute url on port 8080 (we ask trainees to launch their webapp on localhost:9000 and to not use any reverse proxy)
  		let headers = new HttpHeaders({'Content-Type': 'application/json'});
  		
  		return this.http.get('http://localhost:8080/api/news', {headers: headers})
  			.do((news: News[]) => {
  				this.theNews = Observable.from(news);
  			})
  			.flatMap((news: News[]) => {
  				return this.theNews;
  			});
  }

	addLike= (news: News) => {
		this.http.post('/api/news/like/' + news.id, '')
			.subscribe((updatedNews: News) => {
				news.likes = updatedNews.likes;
			});
	}

	deleteNews= (news: News): Observable<any> => {

		/* 	add the responseType as 'text' to workaround an Angular issue - 
			  See https://github.com/angular/angular/issues/19502 
		*/							
		return this.http.delete('/api/news/' + news.id, { responseType: 'text' })
			.do( () => {
				this.theNews = this.theNews
				.filter((currentNews: News) => {
					return currentNews.id !== news.id;
			});

		} );

	}

	addNews= (news: News) => {

		let headers = new HttpHeaders({'Content-Type': 'application/json'});
		
		return this.http.post('/api/news', news, {headers: headers})  
			.do( (addedNews: News) => {
				this.theNews = this.theNews
					.concat(Observable.of(addedNews));
			});
	}

	randomNews= (): Observable<News> => {

		return this.http.get('/api/news/random');
	}





}