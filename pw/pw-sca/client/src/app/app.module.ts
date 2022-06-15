import { NgModule, Component, AfterViewInit } from '@angular/core';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { UserService } from './services/userService';
import { BooksService } from './services/booksService';
import { DataContainerService } from './services/dataContainerService';
import { ContactService } from './services/contactService';
import { AuthServerProvider } from './services/auth/auth-jwt.service';
import { Principal } from './services/auth/principal.service';
import { AccountService } from './services/auth/account.service';
import { JwtInterceptor } from './services/auth/auth-jwt.interceptor';

import { FilterFieldPipe } from './pipes/filterFieldPipe';
import { UpdateDataPipe } from './pipes/updateDataPipe';
import { OrderByPipe } from './pipes/orderByPipe';

import { KPagination } from './kpagination/kpagination';

import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Books } from './books/books';
import { BookDetails } from './bookDetails/bookDetails';
import { Basket } from './basket/basket';
import { Profile } from './profile/profile';
import { Login } from './login/login';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    UserService,
    BooksService,
    DataContainerService,
    ContactService,
    AuthServerProvider,
    Principal,
    AccountService,
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  declarations: [
    Home,
    Contact,
    Books,
    BookDetails,
    Basket,
    Profile,
    Login,
    AppComponent,
    KPagination, //Components
    FilterFieldPipe,
    UpdateDataPipe,
    OrderByPipe, // Pipes
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
