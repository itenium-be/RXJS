import { Observable, range, zip, from, repeat, of, combineLatest, tap, Subject, timer } from 'rxjs';
import { concatMap, debounceTime, delay, distinctUntilChanged, map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { AjaxProductsResponse, Pagination, Product, ProductCategories, ProductFilter } from './models/product-models';
import { sessionStorage } from './models/sessionStorage';


// Dummy JSON API:
// https://dummyjson.com/docs/products
// Use QueryString to filter: /products?limit=10&skip=10&q=phone


// Exercises:
// - Addjust the queryString with pagination$
// - Call the correct urls based on filters$ (see docs)
// - Make sure that all changes < 600ms result in only one API call
// - If nothing has actually changed, don't call the API
// - What about filters.query with special characters?
// - Bonus: Mix in the authentication from the previous exercise?
// - Bonus: Create a HTML Page and link the filters to input
// - Bonus: ProductCategories is currently hardcoded, fetch from the dummyJSON API


const initialPagination: Pagination = {limit: 1, skip: 0};
const initialFilters: ProductFilter = {query: null, productId: null, category: null};
const initialValue = { pagination: initialPagination, filters: initialFilters };

const pagination$ = new Subject<Pagination>();
const filters$ = new Subject<ProductFilter>();



const baseUri = 'https://dummyjson.com/products';
const products$ = ajax.getJSON<AjaxProductsResponse>(`${baseUri}?limit=3`).pipe(
  map(response => response.products)
)




// export const ajaxSubjects$ = products$;




// Solution:

// Could also do the comparison manually...
// npm install --save deep-equal
const equal = require('deep-equal');


export const ajaxSubjects$ = combineLatest([
    pagination$.pipe(startWith(initialPagination)),
    filters$.pipe(startWith(initialFilters)),
  ]).pipe(
  map(([pagination, filters]) => ({pagination, filters})),
  distinctUntilChanged(equal),
  debounceTime(600),
  tap(filters => console.log('About to call API with:', JSON.stringify(filters))),
  switchMap(allFilters => {
    const pagination = allFilters.pagination;
    const filters = allFilters.filters;
    if (filters.productId) {
      return ajax.getJSON<AjaxProductsResponse>(`${baseUri}/${filters.productId}`);
    }

    if (filters.category) {
      return ajax.getJSON<AjaxProductsResponse>(`${baseUri}/category/${filters.category}`);
    }

    let url = `${baseUri}?q=${encodeURIComponent(filters.query)}`;
    url += `&limit=${pagination.limit}&skip=${pagination.skip}`;
    return ajax.getJSON<AjaxProductsResponse>(url);
  }),
  map(resp => resp.products),
);


// Generate some random events:
const randomizr$ = range(1, 10).pipe(
  concatMap(i => of(i).pipe(delay(1000 + Math.random() * 4000))),
);


setTimeout(() => {
  console.log('200ms -> emitting the initial value');
  pagination$.next(initialPagination);
  filters$.next(initialFilters);
}, 200);


setTimeout(() => {
  console.log('800ms -> emitting the initial value');
  pagination$.next(initialPagination);
  filters$.next(initialFilters);
}, 800);



randomizr$.subscribe(val => {
  console.log('Randomizr In Action');
  if (Math.random() < 0.5) {
    const newPag = {
      limit: Math.floor(Math.random() * 10) + 1,
      skip: Math.floor(Math.random() * 10),
    };
    console.log('New Pagination', JSON.stringify(newPag));
    pagination$.next(newPag);
  }

  if (Math.random() < 0.5) {
    const category = ProductCategories[Math.floor(Math.random() * ProductCategories.length)];
    const newFilters = {
      query: (Math.floor(Math.random() * 10) + 1).toString(),
      productId: Math.random() < 0.2 ? Math.floor(Math.random() * 10) : null,
      category: Math.random() < 0.2 ? category : null,
    };
    console.log('New Filters', JSON.stringify(newFilters));
    filters$.next(newFilters);
  }
});


// // setTimeout(() => {
// //   const newPag = {
// //     limit: Math.floor(Math.random() * 4) + 1,
// //     skip: Math.floor(Math.random() * 10),
// //   };
// //   console.log('New Pagination', JSON.stringify(newPag));
// //   pagination$.next(newPag);
// // }, 1500);
