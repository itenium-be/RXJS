import { Observable, range, zip, from, repeat, of, combineLatest, tap, Subject, timer } from 'rxjs';
import { concatMap, debounceTime, delay, distinctUntilChanged, map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { AjaxProductsResponse, Pagination, Product, ProductCategories, ProductFilter } from './models/product-models';
import { sessionStorage } from './models/sessionStorage';


// Dummy JSON API:
// https://dummyjson.com/docs/auth
// Use QueryString to filter: /products?limit=10&skip=10&q=phone


// Exercises:
// - Addjust the queryString with pagination$
// - Call the correct urls based on filters$
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




export const ajaxSubjects$ = products$;
