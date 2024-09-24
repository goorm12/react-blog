import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="header-title">
        <Link to={"/"}>GoormLog</Link>
      </h1>
    </header>
  );
};

export default Header;
