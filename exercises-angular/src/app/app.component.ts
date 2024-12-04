import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DummyJsonService } from './dummy-service';
import { LoginForm, Pagination, ProductFilter, ProductFilterForm } from './models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent implements OnInit {
  products$ = this.service.getProducts();
  categories$ = this.service.getCategories();
  pagination$ = new Subject<Pagination>();
  filters$ = new Subject<ProductFilter>();

  frm: FormGroup<ProductFilterForm>;
  loginForm: FormGroup<LoginForm>;

  constructor(private service: DummyJsonService, fb: FormBuilder) {
    this.frm = fb.group({
      query: '',
      productId: null as unknown as number,
      category: null as unknown as string,
      // limit: 5,
      // skip: 0,
    });

    this.loginForm = fb.nonNullable.group({
      userName: '',
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
