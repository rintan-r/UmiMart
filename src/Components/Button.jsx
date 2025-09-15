
export default function Button({
  variant = "primary",
  children,
  icon,
  iconPosition = "left", // or "right"
  className = "",
  ...props
}) {
  const base = "flex flex-row h-10 py-2 px-4 gap-2 rounded-[24px]";

  const variants = {
    primary: "",
    secondary: "",
    iconDark: `${base} bg-gray-900`,
    iconLight: `${base} bg-gray-200`,
  };


  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon && iconPosition === "left" && (
        <span>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span>{icon}</span>
      )}
    </button>
  );
}