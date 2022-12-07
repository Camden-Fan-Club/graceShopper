import { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const [error, setError] = useState("");
  const selectedUser = useAuth;
  const items = useStoreState((state) => state.items.data);
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);
  const { addItemToCart, cart, fetchCart } = useCart();
  useEffect(() => {
    fetchItems();
    fetchCart();
  }, []);

  const featuredItems = items?.filter((item) => {
    return item.isFeatured;
  });

  return (
    <div class="flex justify-center">
      <h3> featuredItems</h3>
      <div class="grid lg:grid-cols-4 gap-6 md:grid-cols-2  flex-wrap justify-around ">
        {featuredItems.map((item) => {
          return (
            <div class="border-solid border-2 border-slate-700 flex flex-col h-auto w-auto gap-y-6 ml-2 items-center">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <img className="h-40 mt-0" src={item.imageUrl} />
              <p>${item.price}</p>
              {
                (selectedUser.is_admin = true ? (
                  <button
                    onClick={async () => {
                      navigate(`/edit/${item.id}`);
                    }}
                  >
                    Edit Item
                  </button>
                ) : null)
              }
              <button
                onClick={async () => {
                  console.log("cart", cart);
                  try {
                    await addItemToCart({
                      itemId: item.id,
                      orderId: cart.id,
                      quantity: 1,
                    });
                    console.log("ERROR", error);
                    setError("");
                  } catch (err) {
                    setError(err.response.data.message);
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
        {error && <h3>{error}</h3>}
      </div>
    </div>
  );
}
