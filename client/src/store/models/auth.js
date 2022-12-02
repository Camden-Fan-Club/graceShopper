import { action, thunk } from "easy-peasy";
import axios from "axios";

export const auth = {
  selectedUser: {},
  setUser: action((state, payload) => {
    state.selectedUser = payload;
  }),
  loginUser: thunk(async (actions, payload) => {
    console.log("payload in login", payload);
    const { data } = await axios.post("/routes/users/login", payload);
    actions.setUser(data);
  }),
  createUser: thunk(async (actions, payload) => {
    console.log("payload", payload);
    const { data } = await axios.post("/routes/users/register", payload);
    actions.setUser(data);
  }),
  // fetchMe
};
