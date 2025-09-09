interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "rounded-full font-medium transition-all duration-200 ease-in-out";

  const variants = {
    primary:
      "border border-[#7c60ff29] shadow-[0px_0px_7px_#7c60ffe6] bg-gradient-to-r from-[#7c60ffe6] to-[#7c60ffcc] text-white hover:shadow-[0px_0px_10px_#7c60ffe6] cursor-pointer",
    secondary:
      "border border-grey text-gray-700 bg-transparent hover:bg-gray-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      className={`${buttonClasses} ${
        disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
      }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <span className="font-medium">{children}</span>
    </button>
  );
}
