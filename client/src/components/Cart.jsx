import { useEffect } from "react";
import React from "react";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, fetchCart, updateQuantity } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);
  console.log("cart after use effect", cart);

  return (
    <div>
      {" "}
      My Cart
      {cart?.order_items?.map((orderItem) => {
        const item = orderItem.items;
        return (
          <div>
            <img className="h-40 mt-0" src={item.imageUrl} />
            <h3>{item.name}</h3>
            <h4>Price: ${item.price}</h4>
            <h4>Quantity:{orderItem.quantity}</h4>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                console.log("submitting form");
                console.log(item.id);
                const quantity = e.target[0].value;
                console.log("qty", quantity);

                await updateQuantity({
                  itemId: item.id,
                  orderId: cart.id,
                  quantity: +quantity,
                });
              }}
            >
              <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button type="submit">Update Quantity</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
