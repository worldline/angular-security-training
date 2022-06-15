import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalStorageService } from 'ngx-webstorage';
import { AuthServerProvider } from './auth/auth-jwt.service';
import { Principal } from './auth/principal.service';

import { User } from '../beans/user';
import { Item, Basket } from '../beans/basket';

@Injectable()
export class UserService {
  private _isLogged: boolean = false;
  private user?: User;
  private _basket?: Basket;

  private storeKey = 'ecItems';

  constructor(
    private localStorage: LocalStorageService,
    private authServerProvider: AuthServerProvider,
    private principal: Principal
  ) {}

  private loadBasket = (): void => {
    let previousItemsStr: string = this.localStorage.retrieve(this.storeKey);
    if (previousItemsStr) {
      let itemsToLoad = <Item[]>JSON.parse(previousItemsStr);
      this._basket = new Basket(itemsToLoad);
    } else {
      this._basket = new Basket();
    }
  };

  login(credentials: any, callback?: Function) {
    let cb = callback || function () {};

    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
        (data) => {
          this.principal.identity(true).then((account) => {
            this._isLogged = true;
            this.user = account;
            this.loadBasket();
            resolve(data);
          });
          return cb();
        },
        (err) => {
          this.logout();
          reject(err);
          return cb(err);
        }
      );
    });
  }

  logout() {
    this.authServerProvider.logout().subscribe();
    this.principal.authenticate(null);
    this._isLogged = false;
    this.user = undefined;
    this._basket = undefined;
  }

  get isLogged(): boolean {
    return this._isLogged;
  }

  getUser(): User | undefined {
    return this.user;
  }

  get basket(): Basket | undefined {
    return this._basket;
  }

  storeBasket(): void {
    const itemsToStore = this._basket?.getItems();

    if (itemsToStore) {
      this.localStorage.store(this.storeKey, JSON.stringify(itemsToStore));
    }
  }
}
