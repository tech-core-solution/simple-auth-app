import React from "react";

interface SubmitButtonProps {
  label: string;
  styles: string;
}

function SubmitButton({ label, styles }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`${styles} bg-primary-violet rounded-lg text-bold text-white font-bold transform hover:scale-95`}
    >
      {label}
    </button>
  );
}

export default SubmitButton;
