import React from "react";
import ModuleDisplay from "../ModuleDisplay";
import ModuleInput from "../ModuleInput";
import "./Main.css";
export default function Main() {
  return (
    <div className="grid-container">
      <ModuleInput />
      <ModuleDisplay font='black' bgColor="peachpuff" />
      <ModuleDisplay font='black' bgColor="violet" />
      <ModuleDisplay font='white' bgColor="black" />
    </div>
  );
}
