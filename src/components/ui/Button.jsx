export default function Button({
  href,
  children,
  secondary = false,
  className = "",
  ...props
}) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      className={`button ${secondary ? "button-secondary" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
