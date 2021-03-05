import React from "react";
import { useSelector } from "react-redux";
import ModuleDisplayItem from "../ModuleDisplayItem/ModuleDisplayItem";
import "./ModuleDisplay.css";

export default function ModuleDisplay({ font, bgColor, dataType }) {
  const list = useSelector((state) => state[dataType]);
  const { mode } = useSelector((state) => state);

  const sortList = (list, mode) => {
    const rawList = Object.keys(list);
    if (mode === "date") {
      return rawList.sort((a, b) => {
        const aTime = list[a][0];
        const bTime = list[b][0];
        return aTime.localeCompare(bTime);
      });
    }
    if (mode === "alphabet") {
      return rawList.sort((a, b) => a.localeCompare(b));
    }
  };
  const sortedList = sortList(list, mode);

  const displayList = (sorted) => {
    return sorted.map((item) => {
      return <ModuleDisplayItem key={item} name={item} times={list[item][1]} />;
    });
  };

  return (
    <div
      style={{ color: font, backgroundColor: bgColor }}
      className="module-display"
    >
      <ul className="list">{displayList(sortedList)}</ul>
    </div>
  );
}
