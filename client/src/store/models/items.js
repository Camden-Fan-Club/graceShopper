import { action, thunk } from "easy-peasy";
import axios from "axios";

export const items = {
  data: [],
  selectedItem: {},
  setItems: action((state, payload) => {
    state.data = payload;
  }),
  fetchItems: thunk(async (actions, payload) => {
    const { data } = await axios.get("/routes/items");
    actions.setItems(data);
  }),
  addItem: action((state, payload) => {
    state.data.push(payload);
  }),
  createItem: thunk(async (actions, payload) => {
    const { data } = await axios.post("/routes/items", payload);
    actions.addItem(data);
  }),
  selectItem: action((state, payload) => {
    state.selectedItem = payload;
  }),
  fetchItem: thunk(async (actions, payload) => {
    const { data } = await axios.get(`/routes/items/${payload}`);
    actions.selectItem(data);
  }),
};