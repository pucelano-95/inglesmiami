import React, { createContext, FC } from "react";
import useForm, { FormValues } from "../../hooks/useForm";

interface FormProps {
  onSubmit: (values: FormValues) => void;
  initialValue: FormValues;
  [key: string]: any;
}

export const FormContext = createContext<any>(null);

const Form: FC<FormProps> = ({
  onSubmit,
  initialValue,
  children,
  ...props
}) => {
  const { formValues, setFormValue, handleChange, handleSubmit, validate } =
    useForm(initialValue);

  const handleFormSubmit = () => {
    onSubmit(formValues);
  };

  return (
    <div className="col-md-9">
      <FormContext.Provider
        value={{ formValues, setFormValue, handleChange, validate }}
      >
        <form onSubmit={handleSubmit(handleFormSubmit)} {...props}>
          {children}
        </form>
      </FormContext.Provider>
    </div>
  );
};

export default Form;
