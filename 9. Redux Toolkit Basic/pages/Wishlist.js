import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

export default function Wishlist() {
  const wishlists = useSelector(state => state.wishList)
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Action</div>
        </div>
        {wishlists.map(
          ({ productId, title, rating, price, imageUrl }) => (
            <WishlistItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              imageUrl={imageUrl}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  );
}
