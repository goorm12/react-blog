import { Link } from "react-router-dom";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>로그인</div>
      <Link to={"/signup"}>회원가입</Link>
      <Footer />
    </div>
  );
};

export default Login;
