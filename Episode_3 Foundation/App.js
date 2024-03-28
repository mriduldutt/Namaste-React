import React from "react";
import ReactDOM from "react-dom/client";

// React Element
/* const heading = React.createElement("h1",{
    id : "heading",
    children : "Namaste React",
   },"Namaste React 🚀");
   console.log(heading);
*/

// JSX : HTML Like Syntax (Not HTML in JS)

const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX🚀
  </h1>
);


//React Component 
  // 1) Class Based Component - OLD
  // 2) Function Based Component - NEW



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
