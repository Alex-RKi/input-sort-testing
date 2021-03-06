import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToNumbers, addToStrings, addToMixed } from "../Store/ActionCreator";
import "./ModuleInput.css";

export default function ModuleInput() {
  const dispatch = useDispatch();
  const { numbers, strings, mixed } = useSelector((state) => state);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitInput = (e) => {
    if (e.key !== "Enter") return;
    const inputStr = e.target.value;
    if (inputStr.length < 1) return;
    let inputType = checkStrType(inputStr);

    switch (inputType) {
      case "numbers":
        dispatch(addToNumbers(inputStr, numbers));
        break;
      case "strings":
        dispatch(addToStrings(inputStr, strings));
        break;
      case "mixed":
        dispatch(addToMixed(inputStr, mixed));
        break;
      case "symbols":
        console.log("Only letters and numbers alowed!");
        break;
      case "unknown":
        console.log("Unknown type! Abort.");
        break;
      default:
        return;
    }
    setInput("");
  };

  function checkStrType(str) {
    let numbers = 0;
    let letters = 0;

    for (let symbol of str) {
      if (/[a-zа-я]/i.test(symbol)) {
        letters += 1;
      } else if (/[0-9]/.test(symbol)) {
        numbers += 1;
      } else {
        return "symbols";
      }
    }
    if (numbers && !letters) {
      return "numbers";
    }
    if (!numbers && letters) {
      return "strings";
    }
    if (numbers && letters) {
      return "mixed";
    }

    console.log("checkStrType cannot determine str type!");
    return "unknown";
  }

  return (
    <div className="module-input">
      <div className="flex-container">
        <input
          value={input}
          onChange={handleInput}
          onKeyDown={submitInput}
          type="text"
        ></input>
      </div>
    </div>
  );
}
