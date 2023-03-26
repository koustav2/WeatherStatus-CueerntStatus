/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {" "}
        | Developed by{" "}
        <a   rel="noreferrer" href="https://github.com/koustav2" target={"_blank"}>
          Koustav Maity
        </a>
        {" "}|
      </div>
    </React.Fragment>
  );
}

export default App;
