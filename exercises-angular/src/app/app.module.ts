import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DummyJsonService } from './dummy-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    DummyJsonService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
