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
    Namaste React using JSX 🚀
  </h1>
);

//React Component
// 1) Class Based Component - OLD
// 2) Function Based Component - NEW

const TitleComponent = () => (
  <h1 id="title" className="title">
    Namaste Title Functional Components using JSX🚀
  </h1>
);

const number = 1000 ; //normal variable
const HeadingComponent = () => {
  return (
    <div id ="container">
    {TitleComponent()}
    {number}
    {jsxHeading}
    <h1 id="heading" className="head">
      Namaste React Functional Components using JSX🚀
    </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<HeadingComponent />);
