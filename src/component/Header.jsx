import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ rightChild, swiperChild }) => {
  return (
    <header className="Header-container">
      <nav className="nav">
        <h1 className="header-title">
          <Link to={"/"}>GoormLog</Link>
        </h1>
        <div className="span-container">{rightChild}</div>
      </nav>
      <div>{swiperChild}</div>
    </header>
  );
};

export default Header;
