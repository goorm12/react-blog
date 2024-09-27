import { useTheme } from "../context/ThemeProvider";
import "./CreatePosts.css";

const CreatePosts = () => {
  const { theme } = useTheme();
  return (
    <section
      className="CreatePosts"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <form className="create-form">
        <div className="title">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="제목을 입력해주세요"
          />
        </div>

        <div className="category">
          <label htmlFor="category">카테고리</label>
          <select name="category" id="category">
            <option value="">카테고리</option>
            <option value="">frontend</option>
            <option value="">react</option>
          </select>
        </div>

        <div className="text">
          <label htmlFor="text">내용</label>
          <textarea
            name="text"
            id="text"
            placeholder="내용을 입력해주세요...."
          ></textarea>
        </div>

        <button className="create-btn">글 쓰기</button>
      </form>
    </section>
  );
};

export default CreatePosts;
