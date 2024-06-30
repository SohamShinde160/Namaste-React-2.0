import { render , screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utilis/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header componenr with Login button",()=> {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // getByRole is preferred instead of getByText
  // const loginBtn = screen.getByRole("button");

  // if have multiple button & you want to specify on one btn you can do that also
  const loginBtn = screen.getByRole("button" ,  {name:"Login"});

//   const loginBtn = screen.getByText("Login");
  expect(loginBtn).toBeInTheDocument();
})

it("Should render header componenr with CART ITEMS = 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
    );
    
    const cartItems = screen.getByText("Cart(0 items)");
    expect(cartItems).toBeInTheDocument();
});


it("Should render header componenr with CART Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});