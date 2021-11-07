import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Market';
    inputItem = '';
    
    items = ['Carlos', 'Andres', 'Reyes', 'Villacorta', 1996]

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

    addItem(){
        this.items.push(this.inputItem)
        this.inputItem = '';
    }

    deleteItem(index: number){
        this.items.splice(index, 1)
    }
}
