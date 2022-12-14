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
import Sale from "./components/Sale";
import Checkout from "./components/Checkout";
import EditItem from "./components/EditItem";
import MyOrders from "./components/MyOrders";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-stone-100">
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/categories/:categoryId" element={<Categories />} />
        <Route path="/mycart" element={<Cart />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/edit/:itemId" element={<EditItem />} />
        <Route path="/myOrders" element={<MyOrders />} />
      </Routes>
    </div>
  );
}

export default App;
