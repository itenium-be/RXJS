RXJS
====

Node: v22.1.0

```ps1
cd exercises
npm install
npm start
```

Update `exercises/index.ts` to switch between different exercises!


For the Angular RXJS exercises see `exercises-angular/README.md`


Interesting Resources
---------------------

- [Declarative Programming](https://ui.dev/imperative-vs-declarative-programming)
- [Interactive Marbles](https://thinkrx.io/)
- [How to read Marble Diagrams](https://www.zachgollwitzer.com/posts/rxjs-marble-diagrams/)
- [Official Docs](https://rxjs.dev/)
- [DummyJSON.com Backend](https://dummyjson.com/)
- [flatMap, mergeMap, switchMap and concatMap](https://stackoverflow.com/questions/49698640/flatmap-mergemap-switchmap-and-concatmap-in-rxjs)
- [Comprehensive Guide to Higher-Order RxJs Mapping Operators: switchMap, mergeMap, concatMap](https://blog.angular-university.io/rxjs-higher-order-mapping/)
- [Understanding RxJS Operators: forkJoin, zip, combineLatest, and withLatestFrom](https://www.digitalocean.com/community/tutorials/rxjs-operators-forkjoin-zip-combinelatest-withlatestfrom)






Theoretical Stuff
-----------------

[RxJS learning curve? No.. Learning cliff](https://twitter.com/hoss/status/742643506536153088)!


TODO
----

- RXJS example hot vs cold --> & check network tab
- Something to vizualize the marbles? It's builtin RXJS with TestScheduler?
- Finalize the pptx with some additional infos


Theorie Angular:
- Do not use subscribe to set fields, use the AsyncPipe
- Do not reset an observable, declare it once in ctor or ngOnInit and take everything relevant into account


Extra Angular
- Use AbstractControl.valueChange / statusChange
--> Categories & SubCategories --> SubCategories depends on Category selection


RXJS:
- User enters search needle:
- Small initial debounce & then a search goes to the backend
- Cancel the API call when the current search string does not include the API needle & relaunch new with current needle
- Once results have returned from the backend and the current search string > used needle, show those results
- After that normal debounce
