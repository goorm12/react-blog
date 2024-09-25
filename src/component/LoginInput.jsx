import { Link } from "react-router-dom";
import "./LoginInput.css";
const LoginInput = () => {
  return (
    <section className="LoginInput">
      <form className="login-form">
        <div className="email-container">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요"
          />
        </div>

        <div className="password-container">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>

        <button className="login-button">로그인</button>
        <div className="signup-link">
          <span className="signup-text">계정이 없으신가요?</span>
          <Link to={"/signup"}>회원가입</Link>
        </div>
      </form>
    </section>
  );
};

export default LoginInput;
