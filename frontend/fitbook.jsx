import React from "react";
import ReactDOM from "react-dom";
import thanos from '../app/assets/images/thanos.gif'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const tempEle = () => {
    return (
      <div>
        <h1>Welcome to Fitbook</h1>
        <img src={thanos} alt="thanos"></img>
      </div>
    )
  }
  ReactDOM.render(<><h1>Welcome to Fitbook!</h1><img src={thanos} alt="thanos"></img></>, root);
})