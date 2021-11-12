import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products: Product[] = [];
    
    constructor(
        private productsService: ProductsService
    ) { }
    
    ngOnInit(): void {
        this.fetchProduct();
    }

    clickProduct(idProducto: number){
        console.log(idProducto)
    }

    fetchProduct(){
        this.productsService.getAllProducts().subscribe(products => {
            console.log(products);
            this.products = products; 
        })
    }
    
}
