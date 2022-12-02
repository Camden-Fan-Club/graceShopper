import { useEffect } from "react";
import React from "react";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { cart, fetchCart } = useCart();

  useEffect(() => {
    console.log("selecteduser in cart", selectedUser);
    const userId = selectedUser.user.id;
    fetchCart(userId);
  }, []);
  console.log(cart);

  return (
    <div>
      {/* {" "}
      items
      {userCart.map((oI) => {
        const item = oI.items;
        return (
          <div>
            <h3>{item.name}</h3>
            <h4>{item.quantity}</h4>
          </div>
        );
      })} */}
    </div>
  );
}
