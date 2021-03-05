import React from "react";
import "./ModuleDisplay.css";
export default function ModuleDisplay({font, bgColor}) {
  return (
    <div style={{color: font, backgroundColor: bgColor}} className="module-display">
      <ul>
        <li>first item</li>
        <li>second item</li>
      </ul>
    </div>
  );
}
