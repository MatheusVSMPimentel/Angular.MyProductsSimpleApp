import { Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { ContactComponent } from './institutional/contact/contact.component';
import { AboutUsComponent } from './institutional/about-us/about-us.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about-us', component: AboutUsComponent},
    { path: 'features/data-binding', component: DataBindingComponent},
    { path: 'products', component: ProductsListComponent},
    { path: 'products-details/:id', component: ProductsListComponent},
    { path: 'shopping-cart/:id', component: ProductsListComponent}
];
