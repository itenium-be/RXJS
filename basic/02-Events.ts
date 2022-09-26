import { fromEvent, throttleTime, scan } from 'rxjs';

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan((count) => count + 1, 0)
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));



// Other flow control operators are filter, delay, debounceTime, take, takeUntil, distinct, distinctUntilChanged etc.
