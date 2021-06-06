import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-component2',
    templateUrl: './component2.component.html',
    // inputs: ['counterValue'], // can also declare like this (strings[])
    styleUrls: ['./component2.component.css']
})

export class Component2Component {

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
    // ngOnChanges(change: SimpleChanges) {
    //     for (const property in change) {
    //         if (property === 'counterValue') {
    //             console.log('previous value', change[property].previousValue)
    //             console.log('curent value', change[property].currentValue)
    //             console.log('first change', change[property].firstChange);
    //             let currentVaue = change[property].currentValue;
    //             if (currentVaue === 5) {
    //                 alert('exceeding five from comp 2')
    //             }
    //         }
    //     }
    // }

    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log('%c OnChanges', 'background: #ffca36;color: #3a3a3a;margin-left: 30px;padding: 5px 2px')
    //     debugger
    // }
    // ngOnInit(): void {
    //     console.log('%c OnInit', 'background: #ffca36;color: #3a3a3a;margin-left: 30px;padding: 5px 2px')
    //     debugger
    // }
    // ngDoCheck(): void {
    //     console.log('%c DoCheck', 'background: #ffca36;color: #3a3a3a;margin-left: 30px;padding: 5px 2px')
    //     debugger
    // }
    // ngAfterContentInit(): void {
    //     console.log('%c AfterContentInit', 'background: #ffca36;color: #3a3a3a;margin-left: 30px;padding: 5px 2px')
    //     debugger
    // }
    // ngAfterContentChecked(): void {
    //     console.log('%c AfterContentChecked', 'background: #ffca36;color: #3a3a3a;margin-left: 30px;padding: 5px 2px')
    //     debugger
    // }
    // ngAfterViewInit(): void {
    //     console.log('%c AfterViewInit', 'background: #ffca36;color: #3a3a3a;margin-left: 30px;padding: 5px 2px')
    //     debugger
    // }
    // ngAfterViewChecked(): void {
    //     console.log('%c AfterViewChecked', 'background: #ffca36;color: #3a3a3a;margin-left: 30px;padding: 5px 2px')
    //     debugger
    // }
    ngOnDestroy(): void {
        console.log('%c OnDestroy', 'background: #ffca36;color: #3a3a3a;margin-left: 30px;padding: 5px 2px')
        debugger
    }

}
