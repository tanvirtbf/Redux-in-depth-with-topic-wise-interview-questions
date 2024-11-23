import { combineReducers, createStore } from 'redux'
import productReducer from './productReducer'
import cartReducer, { addCartItem, decreaseCartItem, increaseCartItem, removeCartItem } from './cartReducer'
import wishlistReducer, { addWishlistItem, removeWishlistItem } from './wishlistReducer'

const reducer = combineReducers({
  productsList: productReducer,
  cartItems: cartReducer,
  wishlists: wishlistReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.dispatch(addCartItem(1,3))
store.dispatch(addCartItem(2,6))
store.dispatch(addCartItem(3,5))

store.dispatch(removeCartItem(2))

store.dispatch(increaseCartItem(1))
store.dispatch(decreaseCartItem(3))
store.dispatch(decreaseCartItem(1))

store.dispatch(addWishlistItem(3))
store.dispatch(addWishlistItem(5))
store.dispatch(addWishlistItem(6))

store.dispatch(removeWishlistItem(5))


