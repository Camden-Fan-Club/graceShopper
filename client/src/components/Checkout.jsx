import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { checkoutCart, cart } = useCart();
  const { selectedUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("selected user", selectedUser.id);
    await checkoutCart({ userId: selectedUser.id, orderId: cart.id });
    navigate("/");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input placeholder="Card Number" type="text"></input>
      <input placeholder="Expiration" type="text"></input>
      <input placeholder="CVV" type="text"></input>
      <input placeholder="Address" type="text"></input>
      <input placeholder="Zip Code" type="text"></input>
      <button type="submit">Confirm Purchase</button>
    </form>
  );
}
