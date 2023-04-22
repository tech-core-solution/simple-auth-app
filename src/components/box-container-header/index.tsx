import React from "react";

interface BoxContainerHeaderProps {
  label: string;
}

function BoxContainerHeader({ label }: BoxContainerHeaderProps) {
  return (
    <h2
      className="text-primary-lavenderBlue font-bold text-xl mb-6"
      data-aos="fade-in"
    >
      {label}
    </h2>
  );
}

export default BoxContainerHeader;
