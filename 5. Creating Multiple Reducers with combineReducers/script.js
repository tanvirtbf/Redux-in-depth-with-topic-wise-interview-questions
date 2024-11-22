import { combineReducers, createStore } from "redux";
import cartReducer, { ADD_CART_ITEM, DECREASE_CART_ITEM, INCREASE_CART_ITEM, REMOVE_CART_ITEM } from "./cartReducer";
import wishlistsReducer, { ADD_WISHLIST_ITEM, REMOVE_WISHLIST_ITEM } from "./wishlistsReducer";
import productReducer from "./productsReducer";

const reducer = combineReducers({
  products : productReducer,
  cartItems : cartReducer,
  wishlist : wishlistsReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: ADD_CART_ITEM, payload: { productId: 1, quantity: 3 } });
store.dispatch({ type: ADD_CART_ITEM, payload: { productId: 2, quantity: 2 } });
store.dispatch({ type: ADD_CART_ITEM, payload: { productId: 3, quantity: 5 } });
store.dispatch({ type: ADD_CART_ITEM, payload: { productId: 4, quantity: 4 } });

store.dispatch({ type: REMOVE_CART_ITEM, payload: { productId: 3 } })
store.dispatch({ type: REMOVE_CART_ITEM, payload: { productId: 1 } })

store.dispatch({ type: INCREASE_CART_ITEM, payload: { productId: 4 } })
store.dispatch({ type: INCREASE_CART_ITEM, payload: { productId: 4 } })
store.dispatch({ type: DECREASE_CART_ITEM, payload: { productId: 2 } })
store.dispatch({ type: DECREASE_CART_ITEM, payload: { productId: 2 } })


store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 2 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 5 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 6 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 9 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 11 } })

store.dispatch({ type: REMOVE_WISHLIST_ITEM, payload: { productId: 5 } })
