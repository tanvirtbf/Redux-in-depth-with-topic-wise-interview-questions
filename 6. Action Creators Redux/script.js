import { combineReducers, createStore } from "redux";
import cartReducer, { ADD_CART_ITEM, addCartItem, DECREASE_CART_ITEM, decreaseCartItem, INCREASE_CART_ITEM, increaseCartItem, REMOVE_CART_ITEM, removeCartItem } from "./cartReducer";
import wishlistsReducer, { ADD_WISHLIST_ITEM, REMOVE_WISHLIST_ITEM } from "./wishlistsReducer";
import productReducer from "./productsReducer";

const reducer = combineReducers({
  products : productReducer,
  cartItems : cartReducer,
  wishlist : wishlistsReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(addCartItem(1,3));

store.dispatch(removeCartItem(1))

store.dispatch(increaseCartItem(1))

store.dispatch(decreaseCartItem(1))


store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 2 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 5 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 6 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 9 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 11 } })

store.dispatch({ type: REMOVE_WISHLIST_ITEM, payload: { productId: 5 } })
