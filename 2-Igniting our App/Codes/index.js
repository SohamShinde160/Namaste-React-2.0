import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H3"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H11 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent); 
