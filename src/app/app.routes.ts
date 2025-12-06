import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Employees } from './employees/employees';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { ProductsServices } from './products-services/products-services';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'employees', component: Employees },
    { path: 'products-services', component: ProductsServices }, 
    { path: '**', component: Pagenotfound }
];
