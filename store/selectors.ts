import { RootState, UIState } from "./reducers";

export const getUi = (state: RootState) => state.ui;
export const getEmail = (state: RootState) => state.email;
