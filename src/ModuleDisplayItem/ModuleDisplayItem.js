import React from "react";
import "./ModuleDisplayItem.css";

export default function ModuleDisplayItem({ name, times }) {
  return (
    <>
      <li className="listItem">
        <div className="itemName">{name}</div>
        <div>x{times}</div>
      </li>
    </>
  );
}
