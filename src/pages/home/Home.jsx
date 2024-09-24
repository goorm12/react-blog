import Header from "../../component/Header";
import Footer from "../../component/Footer";
import PostList from "../../component/PostList";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <PostList />
      <Footer />
    </div>
  );
};

export default Home;
