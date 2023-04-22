import React, { ChangeEventHandler } from "react";

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  touched: boolean | undefined;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  validationErrors: string | undefined;
}

function Input({
  label,
  type,
  name,
  placeholder,
  value,
  touched,
  handleChange,
  validationErrors,
}: InputProps) {
  return (
    <div className="text-center mt-6">
      <p>
        <label className="font-medium">{label}</label>
      </p>
      <input
        className="w-[80vw] text-center max-w-[22rem] pb-1 pt-4 bg-transparent border:none border-b-2 focus:outline-none focus:border-primary-violet"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {validationErrors && touched && (
        <p className="text-red-500 text-sm">{validationErrors}</p>
      )}
    </div>
  );
}

export default Input;
