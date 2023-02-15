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
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let token = this.ng2localStorage.retrieve('authenticationToken') || this.ng2sessionStorage.retrieve('authenticationToken'); // On récupère le token sur le local storage du client ou bien sur la session deja existante
    //  retrieve jwt token from client storage (local or session) with the key 'authenticationToken'
    // let token = this.ng2localStorage.retrieve(....) || this.ng2sessionStorage.retrieve(....);
    //  verify token is present
        // if (...){
    //  set authorization header in the request with the token : 'Authorization: Bearer __token__'
    if (token){                 /*On créer cette entête de requete si le token existe ( c'est à dire si c'est un utilisateur qui est sur la page et s'est login au site)*/
      req = req.clone({
          setHeaders: {     /*Création du pattern de l'entête de la requete*/
            Authorization: 'Bearer '+token      /*Création de la requete avec de "type" bearer + token de l'utilisateur*/ 
          }
        });
    }
    // req = req.clone({
    //   setHeaders: {
    //     Authorization: ....
    //   }
    // });

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
