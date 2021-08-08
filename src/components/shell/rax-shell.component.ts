import { Component } from '@angular/core';

@Component({
	selector: 'rax-shell',
	template: `
		<div class="rax-shell">
			<ng-content select="router-outlet"></ng-content>
			<ng-content select="rax-dock"></ng-content>
		</div>
	`,
})
export class RaxShell {}