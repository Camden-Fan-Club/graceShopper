import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";

export default function Homepage() {
  const items = useStoreState((state) => state.items.data);
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);

  useEffect(() => {
    fetchItems();
  }, []);

  const featuredItems = items.filter((item) => {
    return item.isFeatured;
  });

  return (
    <div>
      {" "}
      featuredItems
      {featuredItems.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>{item.imageUrl}</p>
          </div>
        );
      })}
    </div>
  );
}
