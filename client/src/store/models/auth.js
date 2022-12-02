import { action, thunk } from "easy-peasy";
import axios from "axios";

export const auth = {
  selectedUser: { username: "Guest" },
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

  logoutUser: thunk(async (actions, payload) => {
    const { data } = await axios.post("/routes/users/logout", payload);
    actions.setUser(data);
  }),
  fetchMe: thunk(async (actions, payload) => {
    const { data } = await axios.get("/routes/users/me", payload);
    actions.setUser(data);
  }),
};
