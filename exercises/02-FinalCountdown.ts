import { Observable, interval, take, Subject } from 'rxjs';
import { map, repeat, startWith, switchMap } from 'rxjs/operators';

// Count down from 10 with a 100ms interval
// Complete the Observable after returning 🎉 instead of 0
// Bonus: Mix in a Subject to restart/stop the countdown

export const finalCountdown$ = interval(100);
