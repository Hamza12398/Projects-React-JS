import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostList from "./PostList";
import PostDetails from "./PostDetails";

function App() {
  return (
    <div className="App">
      <div>
        <Link to='/'>
          <button style={{ fontSize: "40px" }}>Home</button>
        </Link>

        <Link to="/Hello">
          <button style={{ fontSize: "40px" }}>Hello</button>
        </Link>

        <Link to="/Post">
          <button style={{ fontSize: "40px" }}>Posts</button>
        </Link>
      </div>
      {/* ROUTER */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Post" element={<PostList />} />
        <Route path="/Hello" element={<Hello />} />
        <Route path="/PostDetails/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  );
}
export default App;
