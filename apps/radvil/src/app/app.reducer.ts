import type { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../environments/environment";

// biome-ignore lint: <TODO: global app state>
export interface State {}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
