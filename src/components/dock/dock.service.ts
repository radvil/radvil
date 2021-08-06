import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { DOCK_ITEMS } from "./dock-item/dock-item.default";
import { RaxDockItemConfig } from "./dock-item/dock-item.interface";

@Injectable()
export class RaxDockService {
  private readonly _dockItems = new BehaviorSubject<RaxDockItemConfig[]>(DOCK_ITEMS);

  getDefaultItems(): Observable<RaxDockItemConfig[]> {
    return this._dockItems.asObservable();
  }
}