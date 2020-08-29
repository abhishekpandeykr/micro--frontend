import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./index.tsx";

const reactLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
});

export function mount(props) {
  return reactLifeCycles.mount(props);
}

export function bootstrap(props) {
  return reactLifeCycles.bootstrap(props);
}

export function unmount(props) {
  return reactLifeCycles.unmount(props);
}

function domElementGetter() {
  let el = document.getElementById("app3");
  if (!el) {
    el = document.createElement("div");
    el.id = "app3";
    document.body.appendChild(el);
  }
  return el;
}
