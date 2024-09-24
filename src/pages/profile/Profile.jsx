import Footer from "../../component/Footer";
import Header from "../../component/Header";
import PostList from "../../component/PostList";

const Profile = () => {
  return (
    <div>
      <Header />
      <PostList title={"Profile"} />
      <Footer />
    </div>
  );
};

export default Profile;
