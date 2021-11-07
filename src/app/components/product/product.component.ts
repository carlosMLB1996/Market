import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange, DoCheck, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    
    constructor() { 
        console.log("1.Constructor")
    }

    ngOnChanges(changes: SimpleChanges){
        console.log("2.ngOnChanges")
        console.log(changes)
    }

    ngOnInit(): void {
        console.log("3.ngOnInit")
    }

    ngDoCheck(){
        console.log("4.ngDoCheck")
    }

    ngOnDestroy(){
        console.log("5.ngOnDestroy")
    }

    @Input() product: Product | any;
    @Output() productClicked: EventEmitter<any> = new EventEmitter;

    addCart(){
        console.log("Anadir al carrito")
        this.productClicked.emit(this.product.id)
    }

        
}
    