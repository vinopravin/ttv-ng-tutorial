import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component-interaction/parent-to-child/component1/component1.component';
import { Component2Component } from './component-interaction/parent-to-child/component2/component2.component';
import { Component3Component } from './component-interaction/parent-to-child/component3/component3.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
