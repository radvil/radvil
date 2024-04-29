import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DOCK_ITEMS } from "./dock-panel-item/dock-panel-item.default";
import { UiDockPanelItemConfig } from "./dock-panel-item/dock-panel-item.interface";

@Injectable({ providedIn: "root" })
export class UiDockPanelService {
  private readonly _dockItems = new BehaviorSubject<UiDockPanelItemConfig[]>(
    DOCK_ITEMS,
  );

  getDefaultItems(): Observable<UiDockPanelItemConfig[]> {
    return this._dockItems.asObservable();
  }
}
