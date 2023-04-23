import { combineReducers } from "redux";
import { AllActionTypes, SendEmailSuccessAction } from "./actions";
import {
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  UI_RESET_ERROR,
} from "./types";

export interface DataContactEmail {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export interface UIState {
  loading: boolean;
  error?: string;
}

export interface AuthUser {
  isLogged: boolean;
  user: any;
}

export interface RootState {
  ui: UIState;
  email: DataContactEmail;
  auth: AuthUser;
}

export const initialState: RootState = {
  auth: {
    isLogged: false,
    user: {},
  },
  email: {
    name: "",
    email: "",
    message: "",
    subject: "",
  },
  ui: {
    loading: false,
    error: "",
  },
};

export function email(
  state: DataContactEmail = initialState.email,
  action: SendEmailSuccessAction
) {
  switch (action.type) {
    case SEND_EMAIL_SUCCESS:
      return { ...state, loaded: true, data: action.payload };
    default:
      return state;
  }
}

export function ui(
  state: UIState = initialState.ui,
  action: AllActionTypes
): UIState {
  if (action.error) {
    return {
      ...state,
      loading: false,
      error: action.payload?.message,
    };
  }
  switch (action.type) {
    case SEND_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UI_RESET_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  email,
  ui,
});

export default rootReducer;
