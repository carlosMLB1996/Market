import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
    products: Product[] = [
        {
            id: '1',
            image: 'assets/images/tv.jpg',
            title: 'TV',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: '2',
            image: 'assets/images/rubik.png',
            title: 'Cubo Rubik',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: '3',
            image: 'assets/images/cr7.jpeg',
            title: 'El Bicho',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: '4',
            image: 'assets/images/ps5.jpg',
            title: 'Consola PS5',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: '5',
            image: 'assets/images/carro.jpg',
            title: 'Carro ultimo modelo',
            price: 80000,
            description: 'bla bla bla bla bla'
        },
        {
            id: '6',
            image: 'assets/images/pc.jpg',
            title: 'PC de oficina',
            price: 80000,
            description: 'bla bla bla bla bla'
        }
    ];

    clickProduct(idProducto: number){
        console.log(idProducto)
    }
    
}
