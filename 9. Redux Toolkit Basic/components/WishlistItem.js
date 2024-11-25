import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWishListItem } from '../store/slice/wishListSlice'


export default function WishlistItem({ productId, title, rating, price, imageUrl }) {

  const dispatch = useDispatch()

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={()=> dispatch(removeWishListItem(productId))}>Delete</button>
      </div>
    </div>
  )
}
