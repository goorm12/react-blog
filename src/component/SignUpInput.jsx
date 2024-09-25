import { Link } from "react-router-dom";
import "./SignUpInput.css";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const SignUpInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const nav = useNavigate();
  const passwordRegex = /^\d{8,}$/;

  useEffect(() => {
    if (!email && !password && !confirmPassword) {
      setIsSubmitting(true);
    } else if (
      email &&
      passwordRegex.test(password) &&
      password === confirmPassword
    ) {
      setIsSubmitting(false);
    }
  }, [email, password, confirmPassword]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      nav("/", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="SignUpInput">
      <form className="signup-form" onSubmit={handleSignUp}>
        <div className="email-container">
          <label htmlFor="email-input">이메일</label>
          <input
            type="email"
            name="email-input"
            id="email-input"
            placeholder="이메일을 입력하세요"
            autoComplete="new-username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div className="password-container">
          <label htmlFor="password-input">비밀번호</label>
          <input
            type="password"
            id="password-input"
            name="password-input"
            placeholder="비밀번호를 입력하세요"
            autoComplete="new-password"
            onChange={(e) => {
              setPassword(e.target.value);
              if (!passwordRegex.test(password)) {
                setErrorPassword(
                  "비밀번호는 8자리 이상 숫자만 포함해야 합니다."
                );
              } else {
                setErrorPassword("");
              }
            }}
            required
          />
          {errorPassword && (
            <span className="errorMessage">{errorPassword}</span>
          )}
          <label htmlFor="password-input-2">비밀번호 확인</label>
          <input
            type="password"
            id="password-input-2"
            name="password-input-2"
            placeholder="비밀번호를 다시 입력하세요"
            autoComplete="new-password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (e.target.value === password) {
                setErrorConfirmPassword("");
              } else {
                setErrorConfirmPassword("비밀번호가 일치하지 않습니다.");
              }
            }}
            required
          />
          {errorConfirmPassword && (
            <span className="errorMessage">{errorConfirmPassword}</span>
          )}
        </div>

        <div className="login-container">
          <span className="login-text">계정이 이미 있으신가요?</span>
          <Link to={"/login"}>로그인 하러가기</Link>
        </div>

        {error && <span className="errorMessage">{error}</span>}
        <button className="submit-button" disabled={isSubmitting}>
          회원가입하기
        </button>
      </form>
    </section>
  );
};

export default SignUpInput;
