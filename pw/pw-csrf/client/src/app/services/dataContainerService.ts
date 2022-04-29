import { Injectable } from '@angular/core';
import { Book } from '../beans/book';

@Injectable()
export class DataContainerService {
  filteredBooks: Book[] = [];
}
