import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <nav>
        <ul className="footer-ul">
          <li>
            <Link to={"/posts"}>글 쓰기</Link>
          </li>
          <li>
            <Link to={"/login"}>로그인하기</Link>
          </li>
          <li>
            <button>dark mode</button>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
