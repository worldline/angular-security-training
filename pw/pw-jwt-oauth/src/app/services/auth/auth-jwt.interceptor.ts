import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private ng2localStorage: LocalStorageService,
        private ng2sessionStorage: SessionStorageService,
        private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //  retrieve jwt token from client storage (local or session) with the key 'authenticationToken'
        //  verify token is present
        //  set authorization header in the request with the token : 'Authorization: Bearer __token__'


        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                return event;
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                console.error('Incorrect login/password');
              } else if (err.status === 403) {
                console.error('Unauthorized action');
              }
              this.router.navigate(['login']);
              return observableThrowError(err);
            }
          });
    }
}
