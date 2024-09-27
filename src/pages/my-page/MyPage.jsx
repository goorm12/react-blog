import Button from "../../component/Button";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import UserInfo from "../../component/UserInfo";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";

const MyPage = () => {
  const { handleLogout } = useAuth();
  const { theme } = useTheme("light");
  return (
    <>
      <Header
        rightChild={
          <>
            <Link
              to={"/posts"}
              style={{ color: theme === "dark" ? "#fff" : "#000" }}
            >
              글 쓰기
            </Link>
            <Button onClick={handleLogout} text={"로그아웃"} />
          </>
        }
      />
      <UserInfo />
      <Footer />
    </>
  );
};

export default MyPage;
