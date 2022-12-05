import { action, thunk } from "easy-peasy";
import axios from "axios";

export const cart = {
  data: {},
  setCart: action((state, payload) => {
    state.data = payload;
  }),

  fetchCart: thunk(async (actions, payload) => {
    const { data } = await axios.get(`/routes/users/${payload}/cart`);
    actions.setCart(data);
  }),

  //UPDATE

  //DELETE
};
