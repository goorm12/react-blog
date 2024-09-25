import { Link } from "react-router-dom";
import "./SignUpInput.css";

const SignUpInput = () => {
  return (
    <section className="SignUpInput">
      <form className="signup-form">
        <div className="email-container">
          <label htmlFor="email-input">이메일</label>
          <input
            type="text"
            name="email-input"
            id="email-input"
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className="password-container">
          <label htmlFor="password-input">비밀번호</label>
          <input
            type="password"
            id="password-input"
            name="password-input"
            placeholder="비밀번호를 입력하세요"
          />
          <label htmlFor="password-input-2">비밀번호 확인</label>
          <input
            type="password"
            id="password-input-2"
            name="password-input-2"
            placeholder="비밀번호를 다시 입력하세요"
          />
        </div>

        <div className="login-container">
          <span className="login-text">계정이 이미 있으신가요?</span>
          <Link to={"/login"}>로그인 하러가기</Link>
        </div>

        <button className="submit-button">회원가입하기</button>
      </form>
    </section>
  );
};

export default SignUpInput;
