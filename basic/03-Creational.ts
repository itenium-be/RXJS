import { of, defer, from } from 'rxjs';

// Captures current date
const s1 = of(new Date());

// Captures date at the moment of subscription
const s2 = defer(() => of(new Date()));

// of vs from
const s3 = of(1, 2, 3)      // emits 3 times
const s4 = from([1, 2, 3])  // emits 3 times
const s5 = of([1, 2, 3])    // emits once
