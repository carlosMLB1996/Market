import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
    images: string[] = [
        '../assets/images/banner-1.jpg',
        '../assets/images/banner-2.png',
        '../assets/images/banner-3.jpg',
        '../assets/images/banner-3.jpg',
        '../assets/images/banner-3.jpg',
    ];
}
