import { createStore } from "easy-peasy";
import { items } from "./models/items";
import { users } from "./models/auth";

const store = createStore({
  items,
  users,
});

export default store;
