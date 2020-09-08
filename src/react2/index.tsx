import * as React from "react";

export default function Root() {
  const navigate = (path) => (location.pathname = path);
  return (
    <div>
      <h3>this is tezst</h3>
      <span onClick={() => navigate("/app1")}>Navigate to App1</span>
      <span onClick={() => navigate("/app3")}>Navigate to App3</span>
    </div>
  );
}
