import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./index.tsx";

// load all the Required Modules into the DOM;
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

// insert the id in to the DOM realated to the Micro Project
function domElementGetter() {
  let el = document.getElementById("app2");
  if (!el) {
    el = document.createElement("div");
    el.id = "app2";
    document.body.appendChild(el);
  }
  return el;
}
