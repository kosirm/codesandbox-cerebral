import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>My sandbox, fora... {"\u2728"}</h2>
    <h2>Zakaj ne bi delal v tem? V čem je c9 boljši? {"\u2728"}</h2>
    <h2>Ovi toolsi so zakon!!!... {"\u2728"}</h2>
    <h2>A još github... {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
