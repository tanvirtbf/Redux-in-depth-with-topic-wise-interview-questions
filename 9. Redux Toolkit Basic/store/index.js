import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import productsReducer from "./slice/productSlice";
import wishlistSlice from "./slice/wishListSlice";
import { logger } from "./middleware/logger";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartSlice,
    wishList: wishlistSlice,
  },
  middleware: [logger,],
});
