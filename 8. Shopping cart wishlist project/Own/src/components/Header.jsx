import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { TiHeartOutline } from "react-icons/ti";
import { useSelector } from "react-redux";

const Header = () => {
  
  const cartItems = useSelector((state) => state.cartItems)
  const totalCart = cartItems.length
  return (
    <div className="h-20 flex justify-between px-5 items-center bg-slate-50">
      <div className="text-2xl font-semibold uppercase">Shopping Site</div>
      <div className="flex gap-5 items-center">
        <div className="relative p-2 w-12 h-12 cursor-pointer">
          <CiShoppingCart className="w-full h-full" />
          <p className="absolute top-0 right-0 text-sm bg-slate-800 text-white px-2 rounded-full">{totalCart}</p>
        </div>
        <div className="relative p-2 w-12 h-12 cursor-pointer">
          <TiHeartOutline className="w-full h-full"/>
          <p className="absolute top-0 right-0 text-sm bg-slate-800 text-white px-2 rounded-full">5</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
