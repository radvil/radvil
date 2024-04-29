import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "desktop",
    pathMatch: "full",
  },
  {
    path: "desktop",
    loadChildren: () =>
      import("./desktop/desktop.module").then((m) => m.DesktopModule),
  },
];
