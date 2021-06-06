import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, OnChanges, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterContentChecked, OnDestroy {
    count: number = 0;
    hide: boolean = false;
    @ViewChild('IncreaseBtn') IncreaseBtn: ElementRef;
    DecreaseCount() {
        this.count--;
    }

    IncreaseCount() {
        this.count++;
        if (this.count === 10) {
            alert('increased to 10 count from comp1')
        }
    }

    toggleChild2() {
        this.hide = !this.hide;
    }

    // TODO
    // ngOnChanges
    // ngOnInit
    // ngDoCheck
    // ngAfterContentInit
    // ngAfterContentChecked
    // ngAfterViewInit
    // ngAfterViewChecked
    // ngOnDestroy

    ngOnChanges(): void {
        console.log('%c OnChanges', 'background: #2f9caf;color: white;padding: 5px 2px')
        debugger
    }
    ngOnInit(): void {
        console.log('%c OnInit', 'background: #2f9caf;color: white;padding: 5px 2px', this.IncreaseBtn)
        debugger
    }
    ngDoCheck(): void {
        console.log('%c DoCheck', 'background: #2f9caf;color: white;padding: 5px 2px', this.IncreaseBtn)
        debugger
    }
    ngAfterContentInit(): void {
        console.log('%c AfterContentInit', 'background: #2f9caf;color: white;padding: 5px 2px', this.IncreaseBtn)
        debugger
    }
    ngAfterContentChecked(): void {
        console.log('%c AfterContentChecked', 'background: #2f9caf;color: white;padding: 5px 2px', this.IncreaseBtn)
        debugger
    }
    ngAfterViewInit(): void {
        console.log('%c AfterViewInit', 'background: #2f9caf;color: white;padding: 5px 2px', this.IncreaseBtn)
        debugger
    }
    ngAfterViewChecked(): void {
        console.log('%c AfterViewChecked', 'background: #2f9caf;color: white;padding: 5px 2px', this.IncreaseBtn)
        debugger
    }
    ngOnDestroy(): void {
        console.log('%c OnDestroy', 'background: #2f9caf;color: white;padding: 5px 2px', this.IncreaseBtn)
        debugger
    }

}
