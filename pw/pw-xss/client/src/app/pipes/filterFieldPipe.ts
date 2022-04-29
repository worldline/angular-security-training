import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../beans/book';

@Pipe({ name: 'filterField' })
export class FilterFieldPipe<T> implements PipeTransform {
  transform(
    incoming: ReadonlyArray<T>,
    fieldName: string,
    content: string
  ): T[] {
    let res: T[] = [];

    incoming.forEach((val: any, index: number) => {
      if (!content || !fieldName) {
        res.push(val);
      } else {
        let field: string = <string>val[fieldName];
        if (field && field.toLowerCase().indexOf(content.toLowerCase()) > -1) {
          res.push(val);
        }
      }
    });

    return res;
  }
}
