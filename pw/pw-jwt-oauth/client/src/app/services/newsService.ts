import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { News } from '../beans/news';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    let headers= new HttpHeaders({'Content-Type': 'application/json'});
    let _url_ = 'http://localhost:8080/api/news';
    return this.http.get<News[]>(_url_, {headers: headers}) 
    //return this.http.get<News[]>('/api/news');
  }

  addLike(news: News) {
    this.http
      .post('/api/news/like/' + news.id, '')
      .subscribe((updatedNews: News) => {
        news.likes = updatedNews.likes;
      });
  }

  deleteNews = (news: News): Observable<any> => {
    /* 	add the responseType as 'text' to workaround an Angular issue -
			  See https://github.com/angular/angular/issues/19502
		*/
    return this.http
      .delete('/api/news/' + news.id, { responseType: 'text' })
      .pipe(switchMap(this.getNews));
  };

  addNews(news: News): Observable<News[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('/api/news', news, { headers: headers })
      .pipe(switchMap(this.getNews));
  }

  randomNews(): Observable<News> {
    return this.http.get('/api/news/random');
  }
}
