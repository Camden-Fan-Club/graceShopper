import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import Cart from "./Cart";

export default function Navbar() {
  const navigate = useNavigate();
  const { fetchCart, cart } = useCart();
  const { selectedUser, fetchMe, logoutUser } = useAuth();
  useEffect(() => {
    fetchMe().then(() => {
      fetchCart();
    });
  }, []);

  let amount = 0;

  cart?.order_items?.map((item) => {
    amount += item.quantity;
  });

  return (
    <div class="flex justify-evenly items-center bg-slate-700 mb-6">
      <CategoryDropdown />
      <Link to="/home">Home</Link>
      <Link to="/sale">Sales</Link>
      <Link to="/myOrders">My Orders</Link>
      {selectedUser.username === "Guest" ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : null}
      <Link to="/mycart">My Cart ({amount})</Link>

      {selectedUser.username !== "Guest" ? (
        <>
          <Button
            onClick={() => {
              logoutUser();
              navigate("/");
            }}
          >
            Logout
          </Button>{" "}
        </>
      ) : null}
    </div>
  );
}
