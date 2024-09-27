import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Button from "../../component/Button";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import CreatePosts from "../../component/CreatePosts";

const Posts = () => {
  const { handleLogout } = useAuth();
  const nav = useNavigate();

  const handleLogoutAndLogin = async () => {
    await handleLogout();
    nav("/login", { replace: true });
  };

  return (
    <div>
      <Header
        rightChild={<Button onClick={handleLogoutAndLogin} text={"로그아웃"} />}
      />
      <CreatePosts />
      <Footer />
    </div>
  );
};

export default Posts;
