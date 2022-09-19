import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Counter from "./Counter";
import MyUserMFE from "./MyUserMFE";


const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>REMOTE</div>
    <div>Framework: React</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Counter app={{ name: "Remote 1" }} />
    <div>Shared Library vis LINK</div>
    <div>Contracts Types Shared Library with Using Yarn LINK</div>
    <MyUserMFE user={"Martini"} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
