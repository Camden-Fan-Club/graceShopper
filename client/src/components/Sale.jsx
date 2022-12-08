import { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Sale() {
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);
  const deleteItem = useStoreActions((actions) => actions.items.deleteItem);
  const navigate = useNavigate();
  const items = useStoreState((state) => state.items.data);
  const { addItemToCart, cart, fetchCart } = useCart();
  const selectedUser = useAuth();
  const [error, setError] = useState("");
  useEffect(() => {
    fetchItems();
    fetchCart();
  }, []);
  return (
    <div>
      {" "}
      <h3 class="flex justify-center">For Sale</h3>
      <div class="grid lg:grid-cols-4 gap-6 md:grid-cols-2  flex-wrap justify-around ">
        {items.map((item) => {
          if (item.onSale) {
            return (
              <div class="border-solid border-2 border-slate-700 flex flex-col h-auto w-auto gap-y-6 ml-2 items-center">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <img className="h-40 mt-0" src={item.imageUrl} />
                <p>${item.price}</p>
                {selectedUser.is_admin == true ? (
                  <>
                    <button
                      onClick={async () => {
                        deleteItem(item.id);
                      }}
                    >
                      Delete Item
                    </button>
                    <button
                      onClick={async () => {
                        navigate(`/edit/${item.id}`);
                      }}
                    >
                      Edit Item
                    </button>
                  </>
                ) : null}
                <button
                  onClick={async () => {
                    console.log("cart", cart);
                    try {
                      await addItemToCart({
                        itemId: item.id,
                        orderId: cart.id,
                        quantity: 1,
                      });
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
          }
        })}
      </div>
      {error && <h3>{error}</h3>}
    </div>
  );
}
