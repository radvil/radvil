import { makeEnvironmentProviders } from "@angular/core";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { metaReducers, reducers } from "../app/app.reducer";
import { environment } from "../environments/environment";

export function provideCoreConfig() {
  return makeEnvironmentProviders([
  ]);
}
