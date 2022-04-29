import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthServerProvider {
  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService
  ) {}

  getToken() {
    return (
      this.$localStorage.retrieve('authenticationToken') ||
      this.$sessionStorage.retrieve('authenticationToken')
    );
  }

  login(credentials: any): Observable<any> {
    let data = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe,
    };
    return this.http
      .post('api/authenticate', data, { observe: 'response' })
      .pipe(
        map((resp) => this.authenticateSuccess(resp, credentials.rememberMe))
      );
  }

  // TODO PW-JWT-auth
  // In case of authentication success , get the JWT from the response and store it in client storage
  authenticateSuccess(resp: HttpResponse<any>, rememberMe: boolean) {
    return resp;
  }

  loginWithToken(jwt: string, rememberMe: boolean) {
    if (jwt) {
      this.storeAuthenticationToken(jwt, rememberMe);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
    }
  }

  storeAuthenticationToken(jwt: string, rememberMe: boolean) {
    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
    }
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      this.$localStorage.clear('authenticationToken');
      this.$sessionStorage.clear('authenticationToken');
      observer.complete();
    });
  }
}
