import { Observable, range, zip, from, repeat, of, combineLatest } from 'rxjs';
import { map, switchMap } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';
import { AjaxProductsResponse, Product } from './models/product-models';


// Dummy JSON API:
// https://dummyjson.com/docs/products
// Use QueryString to filter: /products?limit=10&skip=10&q=phone

// Exercises:
// - Map the products to the GridProduct type
// - Filter out products that are currently not in stock
// - Log an error to the console if the http request fails
// - Bonus: Download the Product thumbnails to a byte[] / base64 string


export const ajax$ = ajax.getJSON<AjaxProductsResponse>('https://dummyjson.com/products?limit=3').pipe(
    map(response => response.products)
);




/** The model used by our GridComponent */
type GridProduct = {
    id: number;
    title: string;
    category: string;
    /** Price - DiscountPercentage */
    calculatedPrice: number;
    /**
     * The Url of the resource
     * Or Bonus: the byte[] / base64 string of the resource
     **/
    thumbnail: string | any;
}


/** Bonus: how to download a thumbnail: */
export const downloadThumbnail$ = ajax<{response: any}>({
    url: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
    method: 'GET',
    responseType: 'blob',
}).pipe(
    map(resp => resp.response)
);

