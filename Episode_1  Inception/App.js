/**
 *
 *
 * <div id ="parent">
 *     <div id="child">
 *       <h1>I am h1 Tag</h1>
 *       <h2>I am h2 Tag</h2>
 *     </div>
 *
 *     <div id="child2">
 *       <h1>I am child 2 h1 Tag</h1>
 *       <h2>I am child 2 h2 Tag</h2>
 *     </div>
 * </div>
 *
 *
 *  ReactElement(Object) = HTML(Broswer Understandable)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1 " }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

// JSX 

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste Dev from React"
// );

// console.log(heading); :--> Object

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(parent);
root.render(parent);
