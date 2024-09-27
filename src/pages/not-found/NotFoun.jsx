import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404 - Page Not Found</h1>

      <Link to={"/"}>홈으로 가기</Link>
    </div>
  );
};

export default NotFound;
