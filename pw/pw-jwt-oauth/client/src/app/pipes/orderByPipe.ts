import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../beans/book';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(
    input: Book[],
    fieldToSort: string,
    reverse: boolean = false
  ): Book[] {
    if (!input || !fieldToSort) {
      return input;
    }

    let compare = function (o1: any, o2: any) {
      let field1 = o1[fieldToSort];
      let field2 = o2[fieldToSort];

      if (!reverse) {
        return field1 < field2 ? -1 : 1;
      } else {
        return field1 > field2 ? -1 : 1;
      }
    };

    return input.sort(compare);
  }
}
