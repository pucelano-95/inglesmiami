import { Middleware, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import * as api from "../api";

const middleware = [
  thunkMiddleware,
  process.env.NODE_ENV === "development" && loggerMiddleware,
  thunk.withExtraArgument({ api }),
].filter(Boolean) as Middleware[];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
