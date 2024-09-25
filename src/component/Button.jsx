import { useTheme } from "../context/ThemeProvider";
import "./Button.css";
const Button = ({ onClick, text }) => {
  const { theme } = useTheme();
  return (
    <>
      <button
        onClick={onClick}
        className="button"
        style={{ color: theme === "dark" ? "#fff" : "#000" }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
