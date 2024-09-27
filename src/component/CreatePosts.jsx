import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import "./CreatePosts.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const CreatePosts = () => {
  const { theme } = useTheme();
  const [titleValue, setTitleValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      `titleValue: ${titleValue} category: ${categoryValue} textValue:${textValue} `
    );

    try {
      const docRef = await addDoc(collection(db, "users"), {
        title: titleValue,
        category: categoryValue,
        text: textValue,
        date: new Date().toLocaleString(),
      });
      setTitleValue("");
      setCategoryValue("");
      setTextValue("");

      nav("/", { replace: true });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section
      className="CreatePosts"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="제목을 입력해주세요"
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
          />
        </div>

        <div className="category">
          <label htmlFor="category">카테고리</label>
          <select
            name="category"
            id="category"
            onChange={(e) => {
              setCategoryValue(e.target.value);
            }}
          >
            <option value="">선택해주세요</option>
            <option value="프론트엔드">frontend</option>
            <option value="리액트">react</option>
          </select>
        </div>

        <div className="text">
          <label htmlFor="text">내용</label>
          <textarea
            name="text"
            id="text"
            placeholder="내용을 입력해주세요...."
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          ></textarea>
        </div>

        <button className="create-btn">글 쓰기</button>
      </form>
    </section>
  );
};

export default CreatePosts;
