import * as React from "react";
import Header from "./components/Header.tsx";
import Container from "./components/Container.tsx";

export default class Root extends React.Component<any, any> {
  render() {
    const message: string =
      "This was rendered by app 1 which was written in React";

    return (
      <>
        <Header />
        <Container />
      </>
    );
  }
}
