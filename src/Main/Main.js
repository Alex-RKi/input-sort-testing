import React from "react";
import ModuleDisplay from "../ModuleDisplay";
import ModuleInput from "../ModuleInput";
import "./Main.css";
export default function Main() {
  return (
    <div className="grid-container">
      <ModuleInput />
      <ModuleDisplay font="black" bgColor="peachpuff" dataType="strings" />
      <ModuleDisplay font="black" bgColor="violet" dataType="numbers" />
      <ModuleDisplay font="white" bgColor="black" dataType="mixed" />
    </div>
  );
}
