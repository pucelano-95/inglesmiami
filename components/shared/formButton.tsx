import React from "react";
import Button from "./button";
import { FormContext } from "./form";
import { keyToObjectValidate } from "../../utils/utils";

const FormButton = ({ notDisabled, ...props }: any) => {
  const { formValue, validate } = React.useContext(FormContext);
  const formFunction = notDisabled ? [] : keyToObjectValidate(formValue);
  return <Button {...props} disabled={!validate(formFunction)} />;
};

export default FormButton;
