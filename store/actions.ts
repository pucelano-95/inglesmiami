import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "./reducers";
import {
  SEND_EMAIL_FAILURE,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  UI_RESET_ERROR,
} from "./types";
import { DataContactEmail } from "./reducers";
import { useRouter } from "next/router";

interface SendEmailAction {
  type: typeof SEND_EMAIL_REQUEST;
  payload?: Error;
  error?: boolean;
}

export interface SendEmailSuccessAction {
  type: typeof SEND_EMAIL_SUCCESS;
  payload?: Error;
  error?: boolean;
}

interface SendEmailFailureAction {
  type: typeof SEND_EMAIL_FAILURE;
  payload: Error;
  error: boolean;
}

export type AllActionTypes =
  | SendEmailAction
  | SendEmailSuccessAction
  | SendEmailFailureAction;

export const sendEmailRequest = (): SendEmailAction => {
  return {
    type: SEND_EMAIL_REQUEST,
  };
};

export const sendEmailSuccess = (): SendEmailSuccessAction => {
  return {
    type: SEND_EMAIL_SUCCESS,
  };
};

export const sendEmailFailure = (error: Error): SendEmailFailureAction => {
  return {
    type: SEND_EMAIL_FAILURE,
    payload: error,
    error: true,
  };
};

export const sendEmailAction = ({
  name,
  email,
  subject,
  message,
}: DataContactEmail) => {
  return async function (dispatch, getState, { api }) {
    const router = useRouter();
    dispatch(sendEmailRequest());
    try {
      await api.contact.sendEmail({ name, email, subject, message });
      dispatch(sendEmailSuccess());
      // Redirect
      const { from } = router.query;
      router.replace(from ? from.toString() : "/");
    } catch (error) {
      dispatch(sendEmailFailure(error as Error));
    }
  };
};

export const resetError = () => {
  return {
    type: UI_RESET_ERROR,
  };
};
