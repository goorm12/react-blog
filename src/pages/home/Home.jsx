import Header from "../../component/Header";
import Footer from "../../component/Footer";
import PostList from "../../component/PostList";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import Button from "../../component/Button";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div className="Home">
      <Header
        rightChild={
          user ? (
            <>
              <span>{user.email.split("@")[0]}님, 환영합니다!</span>
              <Button onClick={handleLogout} text={"로그아웃"} />
            </>
          ) : (
            <>
              <Link to={"/login"}>로그인</Link>
              <Link to={"/signup"}>회원가입</Link>
              <Link to={"/posts"}>글쓰기</Link>
            </>
          )
        }
      />
      <PostList />
      <Footer
        child={
          user ? (
            <>
              <Button onClick={handleLogout} text={"로그아웃"} />
            </>
          ) : (
            <>
              <Link to={"/login"}>로그인하기</Link>
            </>
          )
        }
      />
    </div>
  );
};

export default Home;
