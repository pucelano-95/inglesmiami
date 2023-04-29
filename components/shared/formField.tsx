import React, { useContext, useEffect, useRef } from "react";
import { FormContext } from "./form";

interface FormFieldProps {
  autofocus?: boolean;
  autocomplete?: boolean;
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  rows?: number;
  required?: boolean;
}

function FormField({
  autofocus,
  autocomplete,
  name,
  placeholder,
  label,
  ...props
}: FormFieldProps) {
  const { formValues, setFormValue } = useContext(FormContext);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const value = formValues[name] || ""; // Default value for textarea

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    setFormValue((prevFormValues: any) => ({
      ...prevFormValues,
      [name]: newValue,
    }));
  };

  return (
    <label
      htmlFor={name}
      className={props.type === "checkbox" ? "form-check-label" : "form-label"}
    >
      {label}
      {props.type !== "textarea" ? (
        <input
          ref={inputRef}
          className={
            props.type === "checkbox" ? "form-check-input" : "form-control"
          }
          autoComplete={autocomplete ? "on" : "off"}
          onChange={handleChange}
          value={props.type === "file" ? undefined : value}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <textarea
          className="form-control"
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          {...props}
        />
      )}
    </label>
  );
}

export default FormField;
