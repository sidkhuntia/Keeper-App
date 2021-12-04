import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"


//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

  //randomly change the background color of the header
  //when the mouse is over it.

// document.querySelector("header").addEventListener("mouseover", function() {

  
//   let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.querySelector("header").style.backgroundColor = "#" + randomColor;

// });
// document.querySelector("header").addEventListener("mouseout", function() {
  
//   document.querySelector("header").style.backgroundColor = "#f5ba13";

// });

