import { combineReducers, createStore } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const reducer = combineReducers({
  productList : productReducer,
  cartItems : cartReducer,
  wishlists : wishlistReducer,
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())


