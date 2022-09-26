import { of, defer, scan } from 'rxjs';

// Captures current date
const s1 = of(new Date());

// Captures date at the moment of subscription
const s2 = defer(() => of(new Date()));
