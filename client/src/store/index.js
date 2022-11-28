import { createStore } from "easy-peasy";
import { items } from "./models/items";

const store = createStore({
  items,
});

export default store;
