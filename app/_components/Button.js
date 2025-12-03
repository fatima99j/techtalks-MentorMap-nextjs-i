import React from "react";

const SIZE_CLASSES = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-[1rem]",
  large: "px-4 lg:px-8 py-2 lg:py-4 text-lg",
};

const VARIATION_CLASSES = {
  primary: "bg-primary-600 hover:bg-primary-800 text-primary-100",
  secondary:
    "bg-none hover:bg-indigo-100 text-primary-600 border-2 border-primary-600",
  tertiary: "bg-primary-100 hover:bg-primary-200 text-primary-600",
};

function Button({
  children,
  onClick,
  size = "medium",
  variation = "primary",
  disabled = false,
  type,
  classes,
}) {
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.medium;
  const variationClass =
    VARIATION_CLASSES[variation] || VARIATION_CLASSES.primary;

  return (
    <button
      className={`${sizeClass} ${variationClass} ${classes} w-full whitespace-nowrap font-semibold transition-colors duration-300 rounded-lg relative cursor-pointer flex items-center justify-center gap-2`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
