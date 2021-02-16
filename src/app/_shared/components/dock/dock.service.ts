import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { dockItems } from "./dock-item/dock-item.default";
import { RadDockItem } from "./dock-item/dock-item.interface";

@Injectable()
export class RadDockService {
  constructor() { }

  dockItemsSubject = new BehaviorSubject<RadDockItem[]>(dockItems);

  getDefaultItems(): Observable<RadDockItem[]> {
    return this.dockItemsSubject.asObservable();
  }
}