import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Market';
  inputItem = '';
  
  items = ['Carlos', 'Andres', 'Reyes', 'Villacorta', 1996];

  power = 10;
  
  addItem(){
      this.items.push(this.inputItem)
      this.inputItem = '';
  }
  
  deleteItem(index: number){
      this.items.splice(index, 1)
  }

}
