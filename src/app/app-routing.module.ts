import { Routes } from '@angular/router';
import { Component1Component } from './component-interaction/parent-to-child/component1/component1.component';
import { Cp1Component } from './component-interaction/child-to-parent/cp1/cp1.component';

export const routes: Routes = [
	{ path: '', component: Component1Component },
	{ path: 'p2c', component: Component1Component },
	{ path: 'c2p', component: Cp1Component },
	{ path: "**", redirectTo: 'c2p' },
];