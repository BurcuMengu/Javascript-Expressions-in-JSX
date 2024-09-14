import React from "react";
import ReactDOM from "react-dom";

const fName = "BM";
const lName = "MB";

const num = 5;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName} !</h1>
    <p>Your lucky number is {3 + 2}</p>
  </div>,
  document.getElementById("root")
);
