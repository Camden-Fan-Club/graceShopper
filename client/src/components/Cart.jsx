import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import useCart from "../hooks/useCart";

export default function Cart() {
  const { cart, fetchCart, updateQuantity, deleteItem } = useCart();
  let cartTotal = 0;
  const navigate = useNavigate();
  useEffect(() => {
    fetchCart();
  }, []);
  console.log("cart after use effect", cart);

  return (
    <div class="flex items-center flex-col">
      <h3 class="flex justify-center "> My Cart</h3>
      <div class="p-6 grid gap-4 w-1/4">
        {cart?.order_items?.map((orderItem) => {
          const item = orderItem.items;
          cartTotal += item.price * orderItem.quantity;
          return (
            <div
              class="  rounded-lg bg-white shadow-md bg-stone-100 border-solid border-slate-700 flex flex-col h-auto w-auto
             gap-h-2 ml-2 items-center"
            >
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
                <button
                  class="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Quantity
                </button>
              </form>

              <button
                onClick={() => {
                  deleteItem({
                    itemId: item.id,
                    orderId: cart.id,
                  });
                }}
              >
                Delete From Cart
              </button>
            </div>
          );
        })}
        <div class="flex justify-center ">
          <h4>total:${cartTotal}</h4>
          <button
            class="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
