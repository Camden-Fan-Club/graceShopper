import { createStore } from "easy-peasy";
import { items } from "./models/items";
import { auth } from "./models/auth";
import { cart } from "./models/cart";

const store = createStore({
  items,
  auth,
  cart,
});

export default store;
