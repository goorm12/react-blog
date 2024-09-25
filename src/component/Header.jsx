import { Link } from "react-router-dom";

import "./Header.css";
import { useTheme } from "../context/ThemeProvider";

const Header = ({ rightChild, swiperChild }) => {
  const { theme } = useTheme();
  return (
    <header
      className="Header-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <nav className="nav">
        <h1 className="header-title">
          <Link
            to={"/"}
            style={{ color: theme === "dark" ? "#fff" : "#87ceeb" }}
          >
            GoormLog
          </Link>
        </h1>
        <div className="span-container">{rightChild}</div>
      </nav>
      <div>{swiperChild}</div>
    </header>
  );
};

export default Header;
