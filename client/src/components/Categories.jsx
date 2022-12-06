import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useCart from "../hooks/useCart";

export default function Categories() {
  const catIds = useParams();
  const [catId, setCatId] = useState("");
  const items = useStoreState((state) => state.items.data);
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);
  const { addItemToCart, cart } = useCart();
  const catDict = {
    1: "Outdoor Paint",
    2: "Tape and Accessories",
    3: "Brushes",
    4: "Rollers",
    5: "Indoor Paint",
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    setCatId(+catIds.categoryId);
  }, [catIds]);

  const catItems = items.filter((item) => {
    return item.categoryId == catId;
  });

  return (
    <>
      <div class="flex justify-center">{`${catDict[catId]}`} </div>
      <div class="grid lg:grid-cols-4 gap-6 md:grid-cols-2  flex-wrap justify-around ">
        {catItems.map((item) => {
          return (
            <div class="border-solid border-2 border-slate-700 flex flex-col h-auto w-auto gap-y-6 ml-2 items-center">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <img className="h-40 mt-0" src={item.imageUrl} />
              <p>${item.price}</p>
              <button
                onClick={async () => {
                  console.log("cart", cart);
                  await addItemToCart({
                    itemId: item.id,
                    orderId: cart.id,
                    quantity: 1,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
