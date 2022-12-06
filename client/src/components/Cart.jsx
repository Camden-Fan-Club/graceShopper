import { useEffect } from "react";
import React from "react";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { cart, fetchCart } = useCart();
  const { selectedUser } = useAuth();

  useEffect(() => {
    console.log("selecteduser in cart", selectedUser);
    const userId = selectedUser.id;
    fetchCart(userId);
  }, []);
  console.log(cart);

  return (
    <div>
      {" "}
      My Cart
      {cart.order_items.map((items) => {
        const item = items.items;
        return (
          <div>
            <img className="h-40 mt-0" src={item.imageUrl} />
            <h3>{item.name}</h3>
            <h4>{items.quantity}</h4>
          </div>
        );
      })}
    </div>
  );
}
