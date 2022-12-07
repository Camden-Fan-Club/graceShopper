import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import useCart from "../hooks/useCart";
import useOrders from "../hooks/useOrders";

export default function MyOrders() {
  const { orders, fetchOrders } = useOrders();
  useEffect(() => {
    fetchOrders();
  }, []);
  console.log(orders);

  return (
    <div>
      {orders?.map((order) => {
        let amount = 0;
        order?.order_items?.map((orderItem) => {
          amount += 1;
        });
        return (
          <div>
            <h3>Order Id: {order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Number of items: {amount}</p>
          </div>
        );
      })}
    </div>
  );
}
