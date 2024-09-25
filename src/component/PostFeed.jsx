import "./PostFeed.css";
const PostFeed = () => {
  return (
    <div className="PostFeed">
      <div className="postFeed-img">
        <img src="/assets/js.png" alt="javascript" />
      </div>

      <div className="postFeed-content">
        <div className="user-info">
          <div className="user"></div>
          <span>유저 네임</span>
          <span>날짜</span>
        </div>
        <span>블로그 제목</span>

        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        </span>

        <div className="postFeed-button">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
