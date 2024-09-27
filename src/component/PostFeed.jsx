import { useAuth } from "../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import "./PostFeed.css";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
const PostFeed = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handle = async () => {
      if (user) {
        try {
          const querySnapshot = await getDocs(collection(db, "posts"));
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

  return (
    <div className="PostFeed">
      {posts.map((post) => {
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
