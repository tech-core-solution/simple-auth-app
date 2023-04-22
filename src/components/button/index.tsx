import React from "react";

interface ButtonProps {
  label: string;
  styles: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`${props.styles} bg-primary-violet rounded-lg text-bold text-white font-bold transform hover:scale-95`}
    >
      {props.label}
    </button>
  );
}

export default Button;
