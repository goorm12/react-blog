import Footer from "../../component/Footer";
import Header from "../../component/Header";
import PostList from "../../component/PostList";

const Posts = () => {
  return (
    <div>
      <Header />
      <PostList title={"Posts"} />
      <Footer />
    </div>
  );
};

export default Posts;
