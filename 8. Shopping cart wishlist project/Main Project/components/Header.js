import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import WishListIcon from "../assets/heart-svgrepo-com.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishlists = useSelector((state) => state.wishList);
  console.log(wishlists);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/wishlist">
          <img src={WishListIcon} alt="cart-icon" />
          <div className="cart-items-count">{wishlists.length}</div>
        </Link>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="wishlist-icon" />
          <div className="cart-items-count">
            {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
