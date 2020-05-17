import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Component1Component } from './component-interaction/parent-to-child/component1/component1.component';
import { Component2Component } from './component-interaction/parent-to-child/component2/component2.component';
import { Component3Component } from './component-interaction/parent-to-child/component3/component3.component';
import { Cp1Component } from './component-interaction/child-to-parent/cp1/cp1.component';
import { Cp2Component } from './component-interaction/child-to-parent/cp2/cp2.component';
import { Cp3Component } from './component-interaction/child-to-parent/cp3/cp3.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Cp1Component,
    Cp2Component,
    Cp3Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
