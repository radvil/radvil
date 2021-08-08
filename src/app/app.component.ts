import { Component } from '@angular/core';

@Component({
	selector: 'rax-root',
	template: `
		<rax-shell>
			<router-outlet></router-outlet>
		</rax-shell>
	`,
	styles: [],
})
export class AppComponent {}
