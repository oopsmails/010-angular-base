import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeMadeDropdownSearchAsyncComponent } from './homemade/hm-dropdown-search-async/hm.dropdown.search.async.component';
import { HomeMadeDropdownSearchAsyncComponent3 } from './homemade/hm-dropdown-search-async3/hm.dropdown.search.async.component3';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMadeDropdownSearchAsyncComponent,
    HomeMadeDropdownSearchAsyncComponent3,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
