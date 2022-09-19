import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Counter from "./Counter";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: Remote</div>
    <div>Framework: React</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
