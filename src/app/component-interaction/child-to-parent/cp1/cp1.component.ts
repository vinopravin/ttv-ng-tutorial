import { Component, ViewChild } from '@angular/core';
import { Cp3Component } from './../cp3/cp3.component'

@Component({
    selector: 'app-cp1',
    templateUrl: './cp1.component.html',
    styleUrls: ['./cp1.component.css']
})
export class Cp1Component {
    count: number = 0; // Note : @method 1, since there were initialization event for the first time, use ngOnit on component 2 to avoid declaring it here
    @ViewChild(Cp3Component, { static: true}) child: Cp3Component;

    constructor() { 
    }

    // Note: Method 1 Event Emit
    updateCount(value: any) {
        this.count = value;
        if (this.count === 10) {
            alert('increased to 10 count from comp1')
        }
    }

    // Note: Can be used for both method 2 and 3, You can directly call this in HTML
    DecreaseCount() {
        this.child.DecreaseCount()
   }

    IncreaseCount() {
        this.child.IncreaseCount()
    }

}
