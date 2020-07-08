import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
            AfterViewInit, AfterViewChecked, OnDestroy {
    
    count: number = 0;
    @ViewChild('increaseBtn') increaseBtn: ElementRef;

    DecreaseCount() {
        this.count--;
    }

    IncreaseCount() {
        this.count++;
        if (this.count === 10) {
            alert('increased to 10 count from Component')
        }
    }
 
    ngOnChanges(changes: SimpleChanges): void {
        console.log('%c OnChanges', 'background: #2f9caf;color: white;padding: 5px 2px')
        debugger
    }
    ngOnInit(): void {
        console.log('%c OnInit', 'background: #2f9caf;color: white;padding: 5px 2px', this.increaseBtn)
        debugger
    }
    ngDoCheck(): void {
        console.log('%c DoCheck', 'background: #2f9caf;color: white;padding: 5px 2px', this.increaseBtn)
        debugger
    }
    ngAfterContentInit(): void {
        console.log('%c AfterContentInit', 'background: #2f9caf;color: white;padding: 5px 2px', this.increaseBtn)
        debugger
    }
    ngAfterContentChecked(): void {
        console.log('%c AfterContentChecked', 'background: #2f9caf;color: white;padding: 5px 2px', this.increaseBtn)
        debugger
    }
    ngAfterViewInit(): void {
        console.log('%c AfterViewInit', 'background: #2f9caf;color: white;padding: 5px 2px', this.increaseBtn)
        debugger
    }
    ngAfterViewChecked(): void {
        console.log('%c AfterViewChecked', 'background: #2f9caf;color: white;padding: 5px 2px', this.increaseBtn)
        debugger
    }
    ngOnDestroy(): void {
        console.log('%c OnDestroy', 'background: #2f9caf;color: white;padding: 5px 2px', this.increaseBtn)
        debugger
    }


}
