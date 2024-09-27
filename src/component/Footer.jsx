import { Link } from "react-router-dom";
import "./Footer.css";

import Button from "./Button";
import { useTheme } from "../context/ThemeProvider";

const Footer = ({ userChild, createChild }) => {
  const { theme, toggleTheme } = useTheme("light");

  return (
    <footer
      className="Footer"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <nav>
        <ul className="footer-ul">
          <li>{createChild}</li>
          <li>{userChild}</li>
          <li>
            <Button text={"Dark"} onClick={toggleTheme} />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
