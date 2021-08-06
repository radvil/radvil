import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RaxSizeConfig } from 'src/common';

import { RaxDockItemConfig, RaxDockService } from 'src/components';

@Component({
	selector: 'rax-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	constructor(private dock: RaxDockService) {}

	private _subscription = new Subscription();
	public appDockItems: RaxDockItemConfig[] = [];
	public size: RaxSizeConfig = { height: 463, width: 755 };
	public position = { top: 50, left: 50 };
	public directions = ['n', 's', 'w', 'e', 'se'];

	ngOnInit(): void {
		this.setAppDock();
	}

	ngOnDestroy(): void {
		this._subscription.unsubscribe();
	}

	private setAppDock(): void {
		this._subscription.add(
			this.dock.getDefaultItems().subscribe((items) => {
				this.appDockItems = items;
			})
		);
	}
}
