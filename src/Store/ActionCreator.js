export const changeSortingMode = (mode) => {
  //sorting mode: date | alphabet
  if (mode !== "date" || mode !== "alphabet") {
    console.log(`Wrong sorting mode passed! 
                Use "date" or "alphabet"`);
    return;
  }
  return {
    type: "CHANGE_SORTING_MODE",
    payload: mode,
  };
};
//-str
export const addToNumbers = (num, numsList) => {
  const newNumsList = updateList(num, numsList);
  return {
    type: "ADD_TO_NUMBERS",
    payload: newNumsList,
  };
};
export const addToStrings = (string, stringsList) => {
  const newStringsList = updateList(string, stringsList);
  return {
    type: "ADD_TO_STRINGS",
    payload: newStringsList,
  };
};
export const addToMixed = (mixed, mixedList) => {
  const newMixedList = updateList(mixed, mixedList);
  return {
    type: "ADD_TO_MIXED",
    payload: newMixedList,
  };
};
//--utils
function updateList(newItem, list) {
  const newList = Object.assign({}, list);
  const times = checkTimesAdded(newItem, list);
  if (!times) {
    console.log(newList);
    newList[newItem] = [];
    newList[newItem][0] = new Date();
    newList[newItem][1] = 1;
  } else {
    newList[newItem][1] += 1;
  }
  return newList;
}
function checkTimesAdded(newItem, list) {
  if (newItem in list) {
    return list[newItem][1]; //timesAdded
  } else {
    return 0;
  }
}
