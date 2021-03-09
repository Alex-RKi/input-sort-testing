import React from "react";
import "./ModuleDisplayItem.css";

export default function ModuleDisplayItem({ name, times }) {
  return (
    <>
      <li className="listItem">
        <div className="itemName">{name}</div>
        {times > 1 ? <div className="itemTimes">x{times} </div> : null}
      </li>
    </>
  );
}
