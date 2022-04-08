
import {Inject, Pipe, PipeTransform} from '@angular/core';

import {DataContainerService} from '../services/dataContainerService';

@Pipe({name:'updateData'})
export class UpdateDataPipe implements PipeTransform{

	constructor( @Inject(DataContainerService) public dataContainer: DataContainerService){}

	transform(input: any, args: any){

		this.dataContainer.filteredBooks = input;
		return input;

	}

}