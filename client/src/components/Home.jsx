import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";

export default function Home() {
  const items = useStoreState((state) => state.items.data);
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);

  useEffect(() => {
    fetchItems();
  }, []);

  const featuredItems = items.filter((item) => {
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
