import { ControlConfig, FormControl, FormGroup } from '@angular/forms';

export type LoginResponse = Omit<User, 'gender'> & {
  gender: string;
  token: string;
};

export type LoginForm = {
  userName: FormControl<string>;
  password: FormControl<string>;
}

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
};

export enum Gender {
  Male,
  Female,
}

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

// export const categories$ = ajax.getJSON<string[]>('https://dummyjson.com/products/categories');
export type Category = string;

/** The response from dummyjson/products */
export type AjaxProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};


/** The model used by our GridComponent */
export type GridProduct = {
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

export type Pagination = {
  /** 'limit' in the queryString */
  limit: number;
  /** 'skip' in the querystring */
  skip: number;
};

export type ProductFilter = {
  /** Passed as 'q' in the queryString */
  query?: string;
  /**
   * When present all the other filters are void:
   * And another url should be used:
   * https://dummyjson.com/products/{productId}
   **/
  productId?: number;
  /**
   * When present all the other filters are void:
   * And another url should be used:
   * https://dummyjson.com/products/category/{category}
   */
  category?: string;
};

type RequiredProductFiler = Required<ProductFilter>;

export type ProductFilterForm = {
  [K in keyof RequiredProductFiler]: FormControl<RequiredProductFiler[K] | null>;
};
