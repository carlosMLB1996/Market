import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductComponent  } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeModule } from './components/home/home.module';
import { OrderModule } from './order/order.module';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: '/home', pathMatch: 'full'},
        { path: 'home', loadChildren:() => import('./components/home/home.module').then(m => m.HomeModule) },
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', component: ProductDetailComponent },
        { path: 'contact', component: ContactComponent, canActivate: [AdminGuard] },
        { path: 'order', loadChildren:() => import('./order/order.module').then(m => m.OrderModule)},
    ]},
    { path: 'admin', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'demo', component: DemoComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
