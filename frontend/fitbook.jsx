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
  ReactDOM.render(<><h1>Welcome to Fitbook!</h1><img src="https://media.tenor.com/images/a7587f87f98dcd024d4dcbc4587a3d4e/tenor.gif" alt="thanos"></img></>, root);
})