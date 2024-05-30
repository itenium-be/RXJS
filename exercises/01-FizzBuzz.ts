import { Observable, range, zip, from, of, repeat } from 'rxjs';
import { map } from 'rxjs/operators';

// Print the first 25 values of FizzBuzz

// FizzBuzz:
// Return the number, unless:
// - it's a multiple of 3, then return Fizz
// - it's a multiple of 5, then return Buzz
// - it's a multiple of 3 and 5, then return FizzBuzz

// Solution 1:
const number$: Observable<number> = range(1, 25);
const fizz$: Observable<string> = number$.pipe(map(n => n % 3 === 0 ? 'Fizz' : ''));
const buzz$: Observable<string> = number$.pipe(map(n => n % 5 === 0 ? 'Buzz' : ''));

export const fizzBuzz$ = zip(number$, fizz$, buzz$).pipe(
  map(([n, fizz, buzz]) => fizz + buzz || n.toString()),
);


// Solution 2:
// const numbers$ = range(1, 25);
// const fizz$ = from([null, null, 'Fizz']).pipe(repeat(25));
// const buzz$ = from([null, null, null, null, 'Buzz']).pipe(repeat());
// export const fizzBuzz$ = zip([numbers$, fizz$, buzz$]).pipe(
//   map(([nr, fizz, buzz]) => [fizz, buzz].join('') || nr)
// );


// Solution 3:
// Avoid lots of code in the subscribe fn!
// Or like here, putting everything in map
// export const fizzBuzz$ = range(1, 25).pipe(
//   map(nr => {
//     if (nr % 15 == 0) return 'FizzBuzz';
//     if (nr % 3 == 0) return 'Fizz';
//     if (nr % 5 == 0) return 'Buzz';
//     return nr;
//   })
// );
