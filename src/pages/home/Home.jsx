import Header from "../../component/Header";
import Footer from "../../component/Footer";
import PostList from "../../component/PostList";
import { Link } from "react-router-dom";

import Button from "../../component/Button";
import MySwiper from "../../component/MySwiper";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user, handleLogout } = useAuth();

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
        swiperChild={
          <div className="swiper-content">
            <MySwiper />
          </div>
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
