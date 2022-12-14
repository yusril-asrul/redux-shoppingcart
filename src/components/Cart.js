import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalQty);
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
