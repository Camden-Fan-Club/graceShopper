import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";

export default function Items() {
  const items = useStoreState((state) => state.items.data);
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div>
      {" "}
      items
      {items.map((item) => {
        console.log("items", items);
        return (
          <div>
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
