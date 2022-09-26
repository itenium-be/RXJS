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


export const ProductCategories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];
