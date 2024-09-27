import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import PostFeed from "./PostFeed";
import "./PostList.css";
import { categories } from "../utils/categories";

const PostList = () => {
  const { theme } = useTheme("light");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategory = (category) => {
    setCategoryFilter(category);
    setActiveCategory(category);
  };

  const filteredEmptyCategory = categories.filter(
    (category) => category.title !== ""
  );

  return (
    <main
      className="PostList"
      style={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}
    >
      <div className="postlist-container">
        <div className="categories-container">
          <ul>
            {filteredEmptyCategory.map((category) => {
              return (
                <li key={category.id}>
                  <button
                    className={
                      activeCategory === category.title ? "active" : ""
                    }
                    onClick={() => {
                      handleCategory(category.title);
                    }}
                  >
                    {category.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="feed-container">
          <PostFeed categoryFilter={categoryFilter} />
        </div>
      </div>
    </main>
  );
};

export default PostList;
