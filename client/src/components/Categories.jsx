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
  const catDict = [
    null,
    "Outdoor Paints",
    "Tape and Accessories",
    "Brushes",
    "Rollers",
    "Indoor Paints",
  ];

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
