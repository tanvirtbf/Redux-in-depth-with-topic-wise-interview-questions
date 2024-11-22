import { combineReducers, createStore } from "redux";
import cartReducer, { ADD_CART_ITEM, addCartItem, DECREASE_CART_ITEM, decreaseCartItem, INCREASE_CART_ITEM, increaseCartItem, REMOVE_CART_ITEM, removeCartItem } from "./cartReducer";
import wishlistsReducer, { ADD_WISHLIST_ITEM, addWishlist, REMOVE_WISHLIST_ITEM, removeWishlist } from "./wishlistsReducer";
import productReducer from "./productsReducer";

const reducer = combineReducers({
  products : productReducer,
  cartItems : cartReducer,
  wishlist : wishlistsReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(addCartItem(1,3));
store.dispatch(addCartItem(2,2));

store.dispatch(removeCartItem(2))

store.dispatch(increaseCartItem(1))

store.dispatch(decreaseCartItem(1))

store.dispatch(addWishlist(2))
store.dispatch(addWishlist(4))
store.dispatch(addWishlist(1))

store.dispatch(removeWishlist(1))
store.dispatch(removeWishlist(2))
