import { fromEvent, throttleTime, map, scan } from 'rxjs';

// Imperative
let count = 0;
let lastClick = Date.now();
document.addEventListener('click', (event: MouseEvent) => {
  if (Date.now() - lastClick >= 1000) {
    count += event.clientX;
    console.log(count);
    lastClick = Date.now();
  }
});


// Declarative
fromEvent<MouseEvent>(document, 'click')
  .pipe(
    throttleTime(1000),
    map(event => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe((count) => console.log(count));
