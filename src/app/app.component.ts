import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RadDockItem, RadDockService } from './_shared/components';

@Component({
  selector: 'rad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private _dockService: RadDockService) {
  }

  private _subscription = new Subscription();
  public appDockItems: RadDockItem[] = [];

  ngOnInit(): void {
    this.setAppDock();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setAppDock(): void {
    this._subscription.add(
      this._dockService.getDefaultItems().subscribe(items => {
        this.appDockItems = items;
      })
    )
  }

}
