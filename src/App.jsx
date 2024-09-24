import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Posts from "./pages/posts/Posts";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
