import { action, thunk } from "easy-peasy";
import axios from "axios";

export const cart = {
  data: {},
  setCart: action((state, payload) => {
    state.data = payload;
  }),

  fetchCart: thunk(async (actions, payload) => {
    console.log("PAYLOAD", payload);
    const { data } = await axios.get(`/routes/users/me/cart`);
    actions.setCart(data);
  }),
  addItem: action((state, payload) => {
    state.data.push(payload);
  }),
  //POST ITEM TO CART
  addItemToCart: thunk(async (actions, payload) => {
    await axios.post(
      `/routes/order_items/${payload.itemId}/${payload.orderId}`,
      { quantity: payload.quantity }
    );
    const { data } = await axios.get(`/routes/users/me/cart`);
    actions.setCart(data);
  }),
  //UPDATE

  //DELETE
};
