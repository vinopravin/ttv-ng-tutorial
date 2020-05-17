import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-component3',
    templateUrl: './component3.component.html',
    styleUrls: ['./component3.component.css']
})
export class Component3Component {
    /**
     * Method 3 using setter and getter method
     */
    _counterValue: any;
    @Input() set counterValue(value: any) {
        this._counterValue = value;
        if (value === 7) {
            alert('exceeding seven from comp 3')
        }
    }

    get counterValue() {
        return this._counterValue;
    }

    constructor() { }
}
