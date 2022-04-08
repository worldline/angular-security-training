

import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name:'filterField'})
export class FilterFieldPipe implements PipeTransform{

	transform(incoming: any[], fieldName: string, content: string): any {

		if (incoming === undefined){
			return;
		}

		let res: any[]= [];

		incoming.forEach((val: any, index: number) => {

			if (!content || !fieldName) {
				res.push(val);
			}
	else {
				let field: string = <string>val[fieldName];
				if (field && field.toLowerCase().indexOf(content.toLowerCase()) > - 1) {
					res.push(val);
				}
			}

		});

		return res;
	}

}