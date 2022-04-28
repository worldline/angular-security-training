import { Book } from './book';

export interface Item {
  product: Book;
  qty: number;
}

export class Basket {
  items: Map<number, Item>;

  constructor(items?: Item[]) {
    this.items = new Map<number, Item>();

    if (items) {
      items.forEach((val: Item, index: number) => {
        this.items.set(val.product.id, val);
      });
    }
  }

  getItems = (): Item[] => {
    let res: Item[] = [];
    this.items.forEach((item: Item, index: number) => {
      res.push(item);
    });

    return res;
  };

  addProduct = (book: Book) => {
    let itemToAdd = this.items.get(book.id);

    if (!itemToAdd) {
      itemToAdd = {
        product: book,
        qty: 0,
      };
      this.items.set(book.id, itemToAdd);
    }

    itemToAdd.qty++;
  };

  removeProduct = (book: Book) => {
    this.items.delete(book.id);
  };

  updateProductQty = (book: Book, newQty: number) => {
    const item = this.items.get(book.id);
    if (item) {
      item.qty = newQty;
    }
  };
}
