import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    product: Product;
    
    constructor(
        private route: ActivatedRoute,
        private productService: ProductsService
    ) { }
    
    ngOnInit(): void {
        this.route.params.subscribe((params: Params) =>{
            const id = params.id;
            this.fetchProduct(id);
            //this.product = this.productService.getProduct(id);
            console.log(this.product)
        })
    }

    fetchProduct(id: string){
        this.productService.getProduct(id).subscribe(product => {
            console.log(product)
            this.product = product;
        })
    }
    
}
