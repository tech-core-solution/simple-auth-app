import React from "react";

interface BaxContainerProps {
  children: JSX.Element;
  styles: string;
}

function BoxContainer({ children, styles }: BaxContainerProps) {
  return (
    <div
      className={`${styles} rounded-3xl bg-primary-midnightBlue/[0.5] p-8 md:p-10 mx-auto shadow-md`}
    >
      {children}
    </div>
  );
}

export default BoxContainer;
