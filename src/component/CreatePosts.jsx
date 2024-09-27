import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import "./CreatePosts.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { categories } from "../utils/categories";

const CreatePosts = () => {
  const { theme } = useTheme();
  const [titleValue, setTitleValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const [textValue, setTextValue] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "posts"), {
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

  const filteredCategories = categories.filter(
    (category) => category.title !== "All"
  );

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
            {filteredCategories.map((option) => {
              return (
                <option value={option.title} key={option.id}>
                  {option.title}
                </option>
              );
            })}
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

        <button
          className="create-btn"
          disabled={!titleValue || !categoryValue || !textValue}
        >
          글 쓰기
        </button>
      </form>
    </section>
  );
};

export default CreatePosts;
