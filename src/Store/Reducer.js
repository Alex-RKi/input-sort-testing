export const Reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_SORTING_MODE":
      return { ...state, mode: action.payload };
    case "ADD_TO_NUMBERS":
      return { ...state, numbers: action.payload };
    case "ADD_TO_STRINGS":
      return { ...state, strings: action.payload };
    case "ADD_TO_MIXED":
      return { ...state, mixed: action.payload };
    default:
      return state;
  }
};
