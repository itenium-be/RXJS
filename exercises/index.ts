import { of } from 'rxjs';
import { fizzBuzz$ } from './01-FizzBuzz';
import { finalCountdown$ } from './02-FinalCountdown';
import { ajax$ } from './03-Ajax';
import { ajaxSecured$ } from './04-Ajax-Secured';
import { ajaxSubjects$ } from './05-Ajax-Subjects';

// XHR2 is a Node replacement for the browser XMLHttpRequest
global.XMLHttpRequest = require('xhr2');



// FizzBuzz
console.log('FizzBuzz:');
fizzBuzz$.subscribe(console.log);



// Final Countdown
// console.log('Final Countdown:');
// finalCountdown$.subscribe({
//     next: console.log,
//     error: console.error,
//     complete: () => console.log('Completed!'),
// });



// AJAX
// console.log('Ajax:');
// ajax$.subscribe(console.log);




// AJAX Secured
// console.log('Ajax Secured:');
// ajaxSecured$.subscribe(console.log);




// AJAX
// console.log('Ajax Subjects');
// ajaxSubjects$.subscribe(console.log);
