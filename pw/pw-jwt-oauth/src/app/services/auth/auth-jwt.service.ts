import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthServerProvider {
    constructor(
        private http: HttpClient,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService
    ) {}

    getToken () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }

    login (credentials: any): Observable<any> {

        let data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post('api/authenticate', data, {observe: 'response'}).map(authenticateSuccess.bind(this));

        // In case of authentication success , get the JWT from the response and store it in client storage
        function authenticateSuccess (resp) {
            // BearerToken to retrieve from Authorization Header ( use resp.headers.get )

            // Verify the content of the authorization header is indeed a bearer token  and not null ( use slice on string)

            // retrieve the token by removing the "Bearer" string with slice function

            // store the jwt in the credentials ( use  storeAuthenticationToken )

            // return the jwt

        }
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

    logout (): Observable<any> {
        return new Observable(observer => {
            this.$localStorage.clear('authenticationToken');
            this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    }
}
