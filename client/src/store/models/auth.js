import { action, thunk } from "easy-peasy";
import axios from "axios";

export const users = {
  data: [],
  selectedUser: {},
  setUser: action((state, payload) => {
    state.data = payload;
  }),
  fetchUsers: thunk(async (actions, payload) => {
    const { data } = await axios.get("/routes/users");
    actions.setItems(data);
  }),

  loginUser: action((state, payload) => [state.data.push(payload)]),
  logUser: thunk(async (actions, payload) => {
    const { data } = await axios.post("/routes/users/login", payload);
    actions.logUser(data);
  }),

  registerUser: action((state, payload) => [state.data.push(payload)]),
  createUser: thunk(async (actions, payload) => {
    console.log("payload", payload);
    const { data } = await axios.post("/routes/users/register", payload);
    actions.registerUser(data);
  }),
};
