import {ReflectiveInjector, Injector} from '@angular/core';

import {UpdateDataPipe} from './updateDataPipe';
import {DataContainerService} from '../services/dataContainerService';


export function main() {

	let parentInjector: Injector;
	let dataContainerMock: any;

	beforeEach(() => {

		dataContainerMock = { filteredBooks: '' };

		parentInjector= ReflectiveInjector.resolveAndCreate([{
			provide: DataContainerService,
			useValue: dataContainerMock
		}]);
	});

	describe('UpdateDataPipe', function() {

		it('Update data', function() {
			let pipe = new UpdateDataPipe(parentInjector.get(DataContainerService));
			let newContent: string = 'new field content';
			pipe.transform(newContent, []);

			expect(dataContainerMock.filteredBooks).toEqual(newContent);
		});

	});

}