import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderSpinnerModule } from './shared/components/loader-spinner';
import { LoadingModule } from './shared/services/loading';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingModule,
    LoaderSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LoaderSpinnerModule,
  ]
})
export class AppModule { }
