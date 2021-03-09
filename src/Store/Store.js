import { createStore } from "redux";
import { Reducer } from "./Reducer";

const initialState = {
  mode: "alphabet", //sorting mode: date | alphabet

  numbers: {},
  strings: {},
  mixed: {},
};
const store = createStore(Reducer, initialState);
export default store;
