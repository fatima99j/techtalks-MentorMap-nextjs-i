import Link from "next/link";

const variants = {
  primary: "bg-primary-600 hover:bg-primary-800 text-primary-100",
  secondary:
    "bg-transparent hover:bg-indigo-100 text-primary-600 border-2 border-primary-600",
  tertiary:
    "bg-primary-100 hover:bg-primary-200 text-primary-600 hover:shadow-lg transition-all duration-300",
  outline:
    "bg-transparent text-primary-100 border-2 border-primary-100 hover:bg-primary-100/15 hover:border-white hover:shadow-lg transition-all duration-300",
  social:
    "bg-primary-100 hover:bg-primary-200 text-gray-800 rounded-md hover:shadow-sm hover:shadow-primary-200/20 transition-all duration-300",
  ghost: "text-gray-500 hover:bg-indigo-50",
  cancel:
    "bg-[#fefefe] text-gray-600 border-1 border-gray-300 hover:bg-gray-100",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

const sizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-3 py-2 sm:px-4 text-base",
  large: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
};

export default function Button({
  href,
  external,
  variant = "primary",
  size = "medium",
  className = "",
  children,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg cursor-pointer transition-colors duration-300";

  const classes = [baseClasses, variants[variant], sizes[size], className].join(
    " "
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
