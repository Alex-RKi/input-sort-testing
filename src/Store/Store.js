import { createStore } from "redux";
import { Reducer } from "./Reducer";

const initialState = {
  mode: "alphabet", //sorting mode: date | alphabet

  numbers: {
    6564: ["2021-03-05T11:32:48+03:00", 5],
    9177: ["2021-03-01T11:00:00+03:00", 115],
  },
  strings: {
    testString: ["2021-03-02T14:32:48+03:00", 1],
  },
  mixed: {
    "**testMixed1+3===0": ["2021-03-04T15:00:00+03:00", 1],
  },
};
const store = createStore(Reducer, initialState);
export default store;
