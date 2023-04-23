import React from "react";

export interface FormValues {
  [key: string]: string | number | boolean | null | string[] | undefined;
}

type ValueGetter = (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => unknown;

const getValueByType: Record<string, ValueGetter> = {
  checkbox: ({ target }) => {
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      return target.checked;
    }
    return false;
  },
  number: ({ target }) => Number(target.value),
  "select-multiple": ({ target }) => {
    const select = target as HTMLSelectElement;
    return Array.from(select.selectedOptions).map(({ value }) => value);
  },
  file: ({ target }) => {
    const input = target as HTMLInputElement;
    return input.files?.[0] || null;
  },
};

type ValidationFunction = (values: FormValues) => boolean;

interface FormHook {
  formValues: FormValues;
  setFormValue: React.Dispatch<React.SetStateAction<FormValues>>;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (
    onSubmit: (values: FormValues) => void
  ) => (event: React.FormEvent<HTMLFormElement>) => void;
  validate: (validations: ValidationFunction[]) => boolean;
}

const defaultGetValue = ({ value }: { value: unknown }) => value;

function useForm(initialFormValue: FormValues): FormHook {
  const [formValues, setFormValue] =
    React.useState<FormValues>(initialFormValue);

  const updateFormValue = (name: string, value: any) => {
    setFormValue((currentFormValues) => ({
      ...currentFormValues,
      [name]: value,
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const valueGetter = getValueByType[event.target.type] || defaultGetValue;
    const value = valueGetter(event);
    updateFormValue(event.target.name, value);
  };

  const handleSubmit =
    (onSubmit: (values: FormValues) => void) =>
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(formValues);
    };

  const validate = (validations: ValidationFunction[]) => {
    return validations.every((validation) => validation(formValues));
  };

  return {
    formValues,
    setFormValue,
    handleChange,
    handleSubmit,
    validate,
  };
}

export default useForm;
