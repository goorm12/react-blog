import { useAuth } from "../context/AuthContext";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import "./PostFeed.css";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
const PostFeed = ({ categoryFilter }) => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handle = async () => {
      if (user) {
        try {
          const queryOrderBy = query(
            collection(db, "posts"),
            orderBy("date", "desc")
          );

          const querySnapshot = await getDocs(queryOrderBy);
          const fetchPosts = [];

          querySnapshot.forEach((doc) => {
            fetchPosts.push({ id: doc.id, ...doc.data() });
          });

          setPosts(fetchPosts);
        } catch (error) {
          console.log(error);
        }
      }
    };

    handle();
  }, [user]);

  const filteredPosts =
    categoryFilter === "All"
      ? posts
      : posts.filter((post) => post.category === categoryFilter);

  return (
    <div className="PostFeed">
      {filteredPosts.map((post) => {
        return (
          <div key={post.id}>
            <div className="postFeed-content">
              <div className="user-info">
                <div className="user"></div>
                <span>{user.email.split("@")[0]}</span>
                <span>{post.date}</span>
              </div>
              <span>{post.title}</span>

              <span className="text-ellipsis">{post.text}</span>

              <div className="postFeed-button">
                <button>수정</button>
                <button>삭제</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostFeed;
