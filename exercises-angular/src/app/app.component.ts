import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DummyJsonService } from './dummy-service';
import { Pagination, ProductFilter } from './models';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  products$ = this.service.getProducts();
  categories$ = this.service.getCategories();
  pagination$ = new Subject<Pagination>();
  filters$ = new Subject<ProductFilter>();

  frm: FormGroup;
  loginForm: FormGroup;

  constructor(private service: DummyJsonService, private fb: FormBuilder) {
    this.frm = fb.group({
      query: '',
      productId: null,
      category: null,
      // limit: 5,
      // skip: 0,
    });

    this.loginForm = fb.group({
      username: '',
      password: '',
    });
  }

  ngOnInit(): void {
    // TODO: should probably unsubscribe at some point
    const sub: Subscription = this.frm.valueChanges.subscribe(value => {
      console.log('Form updated:', value);
    })
  }

  login(): void {
    console.log('User Login Form submitted!');
  }
}
