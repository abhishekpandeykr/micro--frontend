import * as singleSpa from "single-spa";

singleSpa.registerApplication(
  "App1",
  () => import("../react1/app1.js"),
  pathPrefix("/app1")
);
singleSpa.registerApplication(
  "App2",
  () => import("../react2/app2.js"),
  pathPrefix("/app2")
);

singleSpa.registerApplication(
  "App3",
  () => import("../react3/app3.js"),
  pathPrefix("/app3")
);

singleSpa.start();

function pathPrefix(params) {
  return function (location) {
    return location.pathname.startsWith(`${params}`);
  };
}
