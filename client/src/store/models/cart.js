import { action, thunk } from "easy-peasy";
import axios from "axios";

export const cart = {
  data: [],
  setCart: action((state, payload) => {
    state.data = payload;
  }),

  fetchCart: thunk(async (actions, payload, userId) => {
    const { data } = await axios.get(`/routes/users/${userId}/cart`);
    actions.setCart(data);
  }),
};
