import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-component2',
    templateUrl: './component2.component.html',
    // inputs: ['counterValue'], // can also declare like this (strings[])
    styleUrls: ['./component2.component.css']
})

export class Component2Component implements OnChanges {

    /**
     * Method 2 using ngOnChanges method
     */
    @Input() counterValue: number;

    /**
     * NOTE: we can also declare the @input property with ALIAS name as
     * @Input('counterValue') counterValue: number
     */

    /**
     * Method 2
     */
    ngOnChanges(change: SimpleChanges) {
        for (const property in change) {
            if (property === 'counterValue') {
                console.log('previous value', change[property].previousValue)
                console.log('curent value', change[property].currentValue)
                console.log('first change', change[property].firstChange);
                let currentVaue = change[property].currentValue;
                if (currentVaue === 5) {
                    alert('exceeding five from comp 2')
                }
            }
        }
    }
}
