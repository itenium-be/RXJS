import { Observable, range, zip, from, of, repeat } from 'rxjs';
import { map } from 'rxjs/operators';

// Print the first 25 values of FizzBuzz

// FizzBuzz:
// Return the number, unless:
// - it's a multiple of 3, then return Fizz
// - it's a multiple of 5, then return Buzz
// - it's a multiple of 3 and 5, then return FizzBuzz

export const fizzBuzz$ = from([1, 2, 'Fizz', 4, 'Buzz', 6, '...']);
