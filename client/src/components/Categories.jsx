import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Categories() {
  const catIds = useParams();
  const [catId, setCatId] = useState("");
  const items = useStoreState((state) => state.items.data);
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);
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
    <div>
      {`${catDict[catId]}`}{" "}
      {catItems.map((item) => {
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
