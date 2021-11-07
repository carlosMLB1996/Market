import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    
    constructor() { }
    
    ngOnInit(): void {
    }

    product: Product = {
        id: '1',
        image: 'assets/images/tv.jpg',
        title: 'TV',
        price: 80000,
        description: 'bla bla bla bla bla'
    }

        
}
    