import * as React from "react";

export default function Navlink() {
  const navigate = (path) => (location.pathname = path);
  return (
    <div className="nav">
      <span>Todays Advice</span>
      <span>Search Advice</span>
      <span onClick={() => navigate("/app2")}>App2</span>
      <span onClick={() => navigate("/app3")}>App3</span>
    </div>
  );
}
