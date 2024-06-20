import { throwError as observableThrowError, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private ng2localStorage: LocalStorageService,
    private ng2sessionStorage: SessionStorageService,
    private router: Router
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.ng2localStorage.retrieve('authenticationToken') || this.ng2sessionStorage.retrieve('authenticationToken');
    // get the JWT token from the client's storage
    if (token) {
      // check if the token is present
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
          // set authorization header
        }
      });
    }

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('Intercepted event', event);
          }
          return event;
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.error('Incorrect login/password');
            } else if (err.status === 403) {
              console.error('Unauthorized action');
            }
            this.router.navigate(['login']);
          }
          return observableThrowError(err);
        }
      )
    );
  }
}
