import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Basket } from './basket/basket';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Books } from './books/books';
import { BookDetails } from './bookDetails/bookDetails';
import { Home } from './home/home';
import { Contact } from './contact/contact';

const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
  { path: 'books', component: Books },
  { path: 'book/:id', component: BookDetails },
  { path: 'basket', component: Basket },
  { path: 'profile', component: Profile },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);
