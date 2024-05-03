import { isDevMode, type ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { metaReducers, reducers } from "./app.reducer";
import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ logOnly: isDevMode() }),
    provideRouter(appRoutes),
  ],
};
