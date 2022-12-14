import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import ViewCartItems from "./CartItems";
const Layout = () => {
  const cartItems = useSelector((state)=>state.cart.itemList)
  console.log(cartItems)
  let total = 0;
  cartItems.map(e=>{
    total += e.totalPrice * e.qty
  })

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {cartItems.length > 0 && <ViewCartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
