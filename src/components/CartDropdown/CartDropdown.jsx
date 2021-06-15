import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import { selectCartItems } from "../../redux/cart/cart.selector.js";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
