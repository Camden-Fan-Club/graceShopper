import { createStore } from "easy-peasy";
import { items } from "./models/items";
import { auth } from "./models/auth";
import { cart } from "./models/cart";
import { orders } from "./models/orders";
const store = createStore({
  items,
  auth,
  cart,
  orders,
});

export default store;
