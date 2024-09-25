import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ rightChild }) => {
  return (
    <header className="Header">
      <h1 className="header-title">
        <Link to={"/"}>GoormLog</Link>
      </h1>

      <div className="span-container">{rightChild}</div>
    </header>
  );
};

export default Header;
