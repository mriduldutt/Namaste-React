import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
      - Logo
      - Nav-items
* Body
  - Search bar
  - Restaurant ContainerList
    - Restaurant Card-item
      - Image
      - Title
      - Rating
      - Cusines
      - Price
      - Order Now
      - Name
* Footer
      - copyright
      - links
      - Address
      - Contact
*
*
*/

const Header = () => {
  return (
    <div class="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="Namaste Food"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const stylecards = {
    backgroundColor:"#f0f0f0"
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card" style={stylecards}>
           <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d2ade03c514267c784eb2f12e7104855" alt="image"/>
           <h3>Restraunt Name</h3>
           <h5>Biryani , North Indian, Asian</h5>
           <h4>4.4 stars</h4>
           <h4>38 Mins</h4>
           <h4>₹300 for one</h4>
           <button>Order Now</button>

        </div>
    )
}

const Body = () => {
  return (
  <div className="body">
        <div className="search"> 
              Search
        </div>
        <div className="restraunt-container">
            {/* // Restraunt Card */}
            <RestaurantCard/>
        </div>
  </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<AppLayout />);
