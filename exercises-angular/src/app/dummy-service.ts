import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AjaxProductsResponse, Product } from './models';

@Injectable()
export class DummyJsonService {
  configUrl = environment.products.baseUri;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<AjaxProductsResponse>(this.configUrl).pipe(map(resp => resp.products));
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.configUrl + '/categories');
  }
}
