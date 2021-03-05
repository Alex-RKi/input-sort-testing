import { createStore } from "redux";
import { Reducer } from "./Reducer";

const initialState = {
  mode: "date", //sorting mode: date | alphabet

  numbers: {
    6564: ["created", 5],
    9177: ["created", 115],
  },
  strings: {
    testString: ["created", 1],
  },
  mixed: {
    "**testMixed1+3===0": ["created", 1],
  },
};
const store = createStore(Reducer, initialState);
export default store;
