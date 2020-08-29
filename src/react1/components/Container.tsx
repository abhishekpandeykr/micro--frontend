import * as React from "react";
import Advice from "./Advice.tsx";

const Container = () => {
  const [currentAdvice, setAdvice] = React.useState({});
  const url = "https://api.adviceslip.com/advice";

  const innerFn = React.useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAdvice(data);
  });

  React.useEffect(() => {
    innerFn();
  }, []);

  return (
    <div className="container">
      <Advice data={currentAdvice} />
    </div>
  );
};

export default Container;
