
import "./Button.css";


const CommonButton = ({
  type = "button",
  color = "primary", // primary | secondary | gradient 
  variant = "fill",  // fill | outline
  rounded = false,
  disabled = false,
  icon = false,
  className = "",
  children
}) => {

  // map color classes
  const colorClasses = {
    primary: "btn-site-primary",
    secondary: "btn-site-secondary",
    gradient: "btn-site-gradient",
  };

  // final classes
  const classes = `
    btn
    ${colorClasses[color] || colorClasses.primary}
    ${variant === "outline" ? "outline" : ""}
    ${rounded ? "rounded" : ""}
    ${disabled ? "disabled" : ""}
    ${icon ? "btn-icon-only" : ""}
    ${className}
  `;

  return (
    <button
      type={type}
      className={classes.trim()}
    >
      {children}
    </button>
  );
};

export default CommonButton;
