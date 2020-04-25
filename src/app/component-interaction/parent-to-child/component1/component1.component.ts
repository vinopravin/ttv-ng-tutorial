import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

   count: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  DecreaseCount() {
    this.count--;
  }

  IncreaseCount() {
    this.count++;
    if(this.count === 10) {
      alert('increased to 10 count from comp1')
    }
  }

}
