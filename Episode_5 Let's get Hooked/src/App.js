import React from "react";
import ReactDOM from "react-dom/client";
import Header from"./components/Header";
import Body from"./components/Body";
// import Body2 from "./components/Body2";


const stylecards = {
  backgroundColor: "#f0f0f0",
};









const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<AppLayout />);
