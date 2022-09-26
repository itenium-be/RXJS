import { Observable, range, zip, from, repeat, of, combineLatest, tap, Subject, timer } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { AjaxProductsResponse, Product } from './models/product-models';
import { sessionStorage } from './models/sessionStorage';
import { LoginResponse, User, Gender } from './models/login-models';

// Dummy JSON API:
// https://dummyjson.com/docs/auth
// Use QueryString to filter: /products?limit=10&skip=10&q=phone


// Exercises:
// - Before we can request the products$ listing, we need to login!
// - Once logged in, send the Bearer token to the products$ request
// - Save the token in sessionStorage 'access_token'
// - Also save the user information in sessionStorage
// - Map the user gender to the TypeScript enum
// - Bonus: Activate expiresInMins and request a new token after expiring

const products$ = ajax.getJSON<AjaxProductsResponse>('https://dummyjson.com/products?limit=3').pipe(
    map(response => response.products)
);


const expiresInMins = 1;

export const login$ = ajax<LoginResponse>({
  url: 'https://dummyjson.com/auth/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins,
  }),
}).pipe(
  map(resp => resp.response),
);





export const ajaxSecured$ = login$;
