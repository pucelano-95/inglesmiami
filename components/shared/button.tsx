import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <div className="text-center text-md-left mt-4">
      <button {...props}>{children}</button>
    </div>
  );
};

export default Button;
