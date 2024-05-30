import { fromEvent, throttleTime, scan } from 'rxjs';

// Count the document clicks but only once per second

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe({
    next: count => console.log(`Clicked ${count} times`),
    error: err => console.log('err', err),
    complete: () => console.log('Completed'),
  });



// Other flow control operators are filter, delay, debounceTime, take, takeUntil, distinct, distinctUntilChanged etc.
