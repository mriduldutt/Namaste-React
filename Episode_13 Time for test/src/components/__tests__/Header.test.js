import Header from "../Header";
import { Provider } from "react-redux";
import appReduxStore from "../../utils/appReduxStore";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


// Unit testing with jest ------- 
test("should render Header Component with login button", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appReduxStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
 // const loginBtn =  screen.getByRole("button", { name: "Sign-Up / Login" });
   const loginBtn =  screen.getByRole("button", { name: "Sign-Up / Login" });

  //assertion
  expect(loginBtn).toBeInTheDocument();
});


test("should render Header Component with Cart items ", () => {
    //render
    render(
      <BrowserRouter>
        <Provider store={appReduxStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    //querying ( using regex as we are passing text)
     const cartItems =  screen.getByText(/Cart/i);
  
    //assertion
    expect(cartItems).toBeInTheDocument();
  });


test("should change login button text when clicked ", () => {
    //render
    render(
      <BrowserRouter>
        <Provider store={appReduxStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn =  screen.getByRole("button", { name: "Sign-Up / Login" });

    fireEvent.click(loginBtn);

    const logout = screen.getByRole("button", { name: "Log-Out" });

    expect(logout).toBeInTheDocument();
});