import { Component, Input, SimpleChanges } from '@angular/core';

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

    ngOnChanges(changes: SimpleChanges): void {
        console.log('%c OnChanges', 'background: #28a745;color: white;padding: 5px 2px;margin-left: 30px;')
        debugger
    }
    ngOnInit(): void {
        console.log('%c OnInit', 'background: #28a745;color: white;padding: 5px 2px;margin-left: 30px;')
        debugger
    }
    ngDoCheck(): void {
        console.log('%c DoCheck', 'background: #28a745;color: white;padding: 5px 2px;margin-left: 30px;')
        debugger
    }
    ngAfterContentInit(): void {
        console.log('%c AfterContentInit', 'background: #28a745;color: white;padding: 5px 2px;margin-left: 30px;')
        debugger
    }
    ngAfterContentChecked(): void {
        console.log('%c AfterContentChecked', 'background: #28a745;color: white;padding: 5px 2px;margin-left: 30px;')
        debugger
    }
    ngAfterViewInit(): void {
        console.log('%c AfterViewInit', 'background: #28a745;color: white;padding: 5px 2px;margin-left: 30px;')
        debugger
    }
    ngAfterViewChecked(): void {
        console.log('%c AfterViewChecked', 'background: #28a745;color: white;padding: 5px 2px;margin-left: 30px;')
        debugger
    }
    ngOnDestroy(): void {
        console.log('%c OnDestroy', 'background: #28a745;color: white;padding: 5px 2px;margin-left: 30px;')
        debugger
    }
}
