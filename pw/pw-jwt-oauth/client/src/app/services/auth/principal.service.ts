import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AccountService } from './account.service';

@Injectable()
export class Principal {
  private _identity: any;
  private authenticated = false;
  private authenticationState = new Subject<any>();

  constructor(private account: AccountService) {}

  authenticate(_identity: any) {
    this._identity = _identity;
    this.authenticated = _identity !== null;
    this.authenticationState.next(this._identity);
  }

  identity(force?: boolean): Promise<any> {
    if (force === true) {
      this._identity = undefined;
    }

    // check and see if we have retrieved the _identity data from the server.
    // if we have, reuse it by immediately resolving
    if (this._identity) {
      return Promise.resolve(this._identity);
    }

    // retrieve the _identity data from the server, update the _identity object, and then resolve.
    return this.account
      .get()
      .toPromise()
      .then((account) => {
        if (account) {
          this._identity = account;
          this.authenticated = true;
        } else {
          this._identity = null;
          this.authenticated = false;
        }
        this.authenticationState.next(this._identity);
        return this._identity;
      })
      .catch((err) => {
        this._identity = null;
        this.authenticated = false;
        this.authenticationState.next(this._identity);
        return null;
      });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  //Si l'utilsateur est connecté et qu'il fait parti des utilisateurs et qu'il n'est PAS admin, return true sinon return false
  isUser(): boolean {

    if (this._identity && ( this._identity.authorities.indexOf("ROLE_USER")!==-1 || this._identity.authorities.indexOf("ROLE_ADMIN")!== -1  )) 
    { 
      return true;
    } 
    else 
    {
      return false; //Sinon return false
    }
  }

  //Si l'utilisateur est connecté et qu'il appartient aux admins, return true
  isAdmin(): boolean { 
      
    if (this._identity && this._identity.authorities.indexOf("ROLE_ADMIN") !== -1) { 
      return true;
    } else {
      return false; //Sinon return false
    }
  }

  isIdentityResolved(): boolean {
    return this._identity !== undefined;
  }

  getAuthenticationState(): Observable<any> {
    return this.authenticationState.asObservable();
  }

  getImageUrl(): String {
    return this.isIdentityResolved() ? this._identity.imageUrl : null;
  }
}
