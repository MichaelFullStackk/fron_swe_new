import React from "react";

const sizeClasses = {
  txtLexendDecaRegular20Black900: "font-lexenddeca font-normal",
  txtLexendDecaRegular64: "font-lexenddeca font-normal",
  txtLexendDecaRegular20: "font-lexenddeca font-normal",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratMedium14Black900: "font-medium font-montserrat",
  txtLexendDecaRegular36: "font-lexenddeca font-normal",
  txtLexendDecaRegular48: "font-lexenddeca font-normal",
  txtLexendDecaRegular24: "font-lexenddeca font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
