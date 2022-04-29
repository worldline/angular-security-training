import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Book } from '../beans/book';

import { DataContainerService } from '../services/dataContainerService';

@Pipe({ name: 'updateData' })
export class UpdateDataPipe implements PipeTransform {
  constructor(
    @Inject(DataContainerService) public dataContainer: DataContainerService
  ) {}

  transform(input: Book[]): Book[] {
    this.dataContainer.filteredBooks = input;
    return input;
  }
}
