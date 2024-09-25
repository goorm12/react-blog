import { Link } from "react-router-dom";
import "./LoginInput.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      nav("/", { replace: true });
      console.log(userCredential.user);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <section className="LoginInput">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="email-container">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="password-container">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button className="login-button">로그인</button>
        <div className="signup-link">
          <span className="signup-text">계정이 없으신가요?</span>
          <Link to={"/signup"}>회원가입</Link>
        </div>

        {error && <span>{error}</span>}
      </form>
    </section>
  );
};

export default LoginInput;
