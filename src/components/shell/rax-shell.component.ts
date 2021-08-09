import { Component } from '@angular/core';

@Component({
	selector: 'rax-shell',
	template: `
		<ng-content select="router-outlet"></ng-content>
		<ng-content select="rax-dock"></ng-content>
	`,
})
export class RaxShell {}
