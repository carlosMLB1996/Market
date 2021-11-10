import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent  } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: '/home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', component: ProductDetailComponent },
        { path: 'contact', component: ContactComponent },
    ]},
    { path: 'demo', component: DemoComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
