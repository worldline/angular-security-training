import {OrderByPipe} from './orderByPipe';


export function main() {

	interface Person{
		firstName: string,
		lastName: string,
		yearOfBirth: number
	};

	let person0: Person,
		person1: Person,
		person2: Person;

	let persons: Person[];

	let pipe: OrderByPipe;

	beforeEach(() => {
		person0 = { firstName: 'lou', lastName: 'reed', yearOfBirth: 1942 };
		person1 = { firstName: 'michael', lastName: 'jackson', yearOfBirth: 1958 };
		person2 = { firstName: 'grace', lastName: 'slick', yearOfBirth: 1939 };
		
		persons = [person0, person1, person2];

		pipe = new OrderByPipe();
	});

	describe('OrderByPipe', function(){

		it('Filter on string, no reverse', function() {

			pipe.transform(persons, 'firstName');

			expect(persons[0]).toBe(person2);
			expect(persons[1]).toBe(person0);
			expect(persons[2]).toBe(person1);

		});


		it('Filter on string, reverse', function() {

			pipe.transform(persons, 'firstName', true);

			expect(persons[0]).toBe(person1);
			expect(persons[1]).toBe(person0);
			expect(persons[2]).toBe(person2);

		});

		it('Filter on number, no reverse', function() {

			pipe.transform(persons, 'yearOfBirth');

			expect(persons[0]).toBe(person2);
			expect(persons[1]).toBe(person0);
			expect(persons[2]).toBe(person1);

		});		


	});

}