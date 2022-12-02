import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { selectedUser } = useAuth();
  const { cart, fetchCart } = useCart();

  useEffect(() => {
    console.log("selecteduser in cart", selectedUser);
    const userId = selectedUser.user.id;
    fetchCart(userId);
  }, []);
  const userCart = selectedUser.cart[0].order_items;

  return (
    <div>
      {" "}
      items
      {userCart.map((oI) => {
        const item = oI.items;
        return (
          <div>
            <h3>{item.name}</h3>
            <h4>{item.quantity}</h4>
          </div>
        );
      })}
    </div>
  );
}
