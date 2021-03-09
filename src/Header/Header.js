import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortingMode } from "../Store/ActionCreator";
import "./Header.css";
export default function Header() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state);


  const handleSelect = (e) => {
    const inputMode = e.target.value;
    if (inputMode === mode) return;
    dispatch(changeSortingMode(inputMode));
  };
  return (
    <div className="header">
      
      <select
        onChange={handleSelect}
        className="selectMode"
        defaultValue="date"
      >
        <option value="date">Sort by date</option>
        <option value="alphabet">Sort by alphabet</option>
      </select>
    </div>
  );
}
