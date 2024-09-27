import { useTheme } from "../context/ThemeProvider";
import PostFeed from "./PostFeed";
import "./PostList.css";

const PostList = () => {
  const { theme } = useTheme("light");
  return (
    <main
      className="PostList"
      style={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}
    >
      <div>
        <PostFeed />
      </div>
    </main>
  );
};

export default PostList;
