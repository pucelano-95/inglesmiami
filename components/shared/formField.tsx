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
}

function FormField({
  autofocus,
  autocomplete,
  name,
  placeholder,
  label,
  ...props
}: FormFieldProps) {
  const { formValue, handleChange } = useContext(FormContext);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={props.type === "checkbox" ? "" : "form-group mt-4"}>
      <label
        htmlFor={name}
        className={props.type === "checkbox" ? "form-check-label" : ""}
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
            value={props.type === "file" ? undefined : formValue[name]}
            placeholder={placeholder}
            {...props}
          />
        ) : (
          <textarea
            className="form-control"
            onChange={handleChange}
            value={formValue[name]}
            placeholder={name}
            {...props}
          />
        )}
      </label>
    </div>
  );
}

export default FormField;
