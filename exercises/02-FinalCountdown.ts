import { Observable, interval, take, Subject } from 'rxjs';
import { map, repeat, startWith, switchMap } from 'rxjs/operators';

// Count down from 10 with a 100ms interval
// Complete the Observable after returning 🎉 instead of 0
// Bonus: Mix in a Subject to restart/stop the countdown

// export const finalCountdown$ = interval(100);



// Solution
export const finalCountdown$ = interval(1000).pipe(
  take(11),
  map(nr => 10 - nr || '🎉')
);



// Bonus Solution
// In a html setting this would come from:
// fromEvent<MouseEvent>(buttonRef, 'click')
// const restartButton$ = new Subject();
// const timer$ = interval(1000).pipe(
//   take(11),
//   map(nr => 10 - nr || '🎉'),
// );


// export const finalCountdown$ = restartButton$.pipe(
//   startWith(0),
//   switchMap(() => timer$),
// );


// // Let's say someone clicks the button every 6 seconds :)
// setInterval(() => {
//   console.log('Restarting timer:');
//   restartButton$.next(0);
// }, 6000);
