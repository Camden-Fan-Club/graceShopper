import { useState } from "react";
import "./App.css";
import Items from "./components/Items";
import NavBar from "./components/NavBar";
import Homepage from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Register from "./components/Register";
import Login from "./components/login";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-neutral-200">
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/categories/:categoryId" element={<Categories />} />
        <Route path="/mycart" element={<Cart />} />
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          amount of paint {count}
        </button>
      </div>
    </div>
  );
}

export default App;
