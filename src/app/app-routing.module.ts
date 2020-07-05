import { Routes } from '@angular/router';
import { Component1Component } from './main/components-dir/component1/component1.component';

export const routes: Routes = [
	{ path: '', component: Component1Component },
	{ path: 'p2c', component: Component1Component },
	{ path: "**", redirectTo: 'c2p' },
];