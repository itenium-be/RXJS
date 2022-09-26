Angular Exercises
=================

```ps1
cd exercises-angular
npm install
npm start
```

Exercises
---------

Keep track of the API calls in your network tab!  
Don't make any calls that are not necessary!

Exercises not prefixed with `RXJS:` are Angular/SCSS exercises ;)

### Grid

- RXJS: Implement `calculatedPrice`
- RXJS: Add frontend sorting
- RXJS or Angular: Make `category` look more user-friendly
- Click on the product title to see additional details


### Filters

- RXJS & Angular: Replace limit/skip with a sensible and working UI (located at the bottom of the grid)
- RXJS: Implement the other filters: query, productId & category
- Make it look pretty?
- Add validation: `productId` & `category` cannot be both filled in
- Show validation errors


### Login & Edit

- RXJS: Remove the `ngIf="false"` and implement logging in (Auth header, sessionStorage, ...)
- And then either:
  - Implement inline edit
  - Create a Component to display the User info
  - RXJS: Setup refreshing the token
  - Add a form to post a new product




### Bonus

- Bonus: Implement `thumbnail` opening modal with all images gallery


### Bonus: Store

- RXJS: Setup a Store
- RXJS: Handle Products, Categories & User info in the store
- RXJS: Avoid doing a request when the product(s) are already in the store
- Implement Routing to /products/1 detail page
