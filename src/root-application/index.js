import * as singleSpa from "single-spa";
// import * as style from "./index.scss";

singleSpa.registerApplication(
  "App1",
  () => import("../react1/app1.js"),
  (location) =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/app1")
);
singleSpa.registerApplication(
  "App2",
  () => import("../react2/app2.js"),
  (location) => location.pathname.startsWith("/app2")
  // pathPrefix("/app2")
);

singleSpa.registerApplication(
  "App3",
  () => import("../react3/app3.js"),
  (location) => location.pathname.startsWith("/app3")
  // pathPrefix("/app3")
);

singleSpa.start();

function pathPrefix(params) {
  return function (location) {
    return location.pathname.startsWith(`${params}`);
  };
}
