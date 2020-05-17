import { Component, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-cp3',
    templateUrl: './cp3.component.html',
    styleUrls: ['./cp3.component.css']
})
export class Cp3Component {
    // @Input('counterValue') counterValue: any;    
    counterValue: number = 0;

    DecreaseCount() {
        this.counterValue--;
    }

    IncreaseCount() {
        this.counterValue++;
    }
}
