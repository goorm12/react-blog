import { Link } from "react-router-dom";
import "./Footer.css";

import Button from "./Button";
import { useTheme } from "../context/ThemeProvider";

const Footer = ({ child }) => {
  const { theme, toggleTheme } = useTheme();
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
          <li>
            <Link
              to={"/posts"}
              style={{ color: theme === "dark" ? "#fff" : "#000" }}
            >
              글 쓰기
            </Link>
          </li>
          <li>{child}</li>
          <li>
            <Button text={"Dark"} onClick={toggleTheme} />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
