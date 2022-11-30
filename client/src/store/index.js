import { createStore } from "easy-peasy";
import { items } from "./models/items";
import { auth } from "./models/auth";

const store = createStore({
  items,
  auth,
});

export default store;
