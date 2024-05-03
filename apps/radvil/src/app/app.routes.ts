import { Routes } from "@angular/router";

export const APP_ROUTES = {
  DESKTOP: "desktop",
} as const;

export type TAppRoutes = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];

export const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: APP_ROUTES.DESKTOP,
  },
  {
    path: APP_ROUTES.DESKTOP,
    loadComponent: async () => {
      const factory = await import("./desktop/desktop.cmp");
      return factory.DesktopCmp;
    },
  },
];
