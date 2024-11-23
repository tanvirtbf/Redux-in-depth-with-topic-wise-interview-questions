import React from 'react'

const SingleCart = ({ image, title, price, rating}) => {
  return (
    <div className='flex flex-col justify-between border border-slate-400 rounded-xl p-2 w-60 text-base'>
      <div className='w-full h-60'>
        <img src={image} alt="image" className='w-full h-full'/>
      </div>
      <div className='title'>{title}</div>
      <div>Price : {price} $ </div>
      <div>Rating : {rating.rate} </div>
      <div className='flex gap-1'>
        <button className='grow bg-slate-300 py-2 rounded-md'>Add to Cart</button>
        <button className='grow bg-slate-300 py-2 rounded-md'>Add to Wishlist</button>
      </div>
    </div>
  )
}

export default SingleCart
