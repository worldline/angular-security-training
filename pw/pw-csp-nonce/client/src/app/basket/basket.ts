import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/userService';
import { Book } from '../beans/book';
import { Basket as BasketBean, Item } from '../beans/basket';

@Component({
  selector: 'basket',
  templateUrl: 'basket.html',
  styleUrls: ['basket.css'],
})
export class Basket {
  items: Item[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.updateItems();
  }

  updateItems = (): void => {
    this.items = this.userService.basket?.getItems() ?? [];
  };

  removeProduct = (book: Book) => {
    this.userService.basket?.removeProduct(book);
    this.updateItems();
    return false;
  };

  getTotal = (): number => {
    let res = 0;

    this.items.forEach((item: Item) => {
      res += item.product.price * item.qty;
    });

    return res;
  };

  storeBasket = this.userService.storeBasket;
}
