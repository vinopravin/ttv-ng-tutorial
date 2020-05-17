import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-cp2',
    templateUrl: './cp2.component.html',
    styleUrls: ['./cp2.component.css']
})
export class Cp2Component {
    @Input('counterValue') counterValue: any; // Note: You don't need this for 2nd Type (Local Variable) if You declare this counterValue here as counterValue = 0
    @Output() countChanged: EventEmitter<any> = new EventEmitter()  // Note: @method 1 @Event Emit
    constructor() { }

    DecreaseCount() {
        this.counterValue--;
        this.countChanged.emit(this.counterValue) // Note: @method 1 @Event Emit
    }

    IncreaseCount() {
        this.counterValue++;
        this.countChanged.emit(this.counterValue) // Note: @method 1 @Event Emit
        if (this.counterValue === 5) {
            alert('increased to 5 count from comp2')
        }
    }
}
