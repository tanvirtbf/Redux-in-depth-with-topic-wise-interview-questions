import { createStore } from "redux";
import { productsList } from "./productsList";

const initialState = {
  porductsList: productsList,
  cartItems: [],
  wishlists: [],
};

const ADD_CART_ITEM = "cart/addCart";
const REMOVE_CART_ITEM = "cart/removeCart";
const INCREASE_CART_ITEM = "cart/increasaeCart";
const DECREASE_CART_ITEM = "cart/decreaseCart";

const ADD_WISHLIST_ITEM = "wishlist/addItem";
const REMOVE_WISHLIST_ITEM = "wishlist/removeItem";

function reducer(state=initialState, action) {

  switch(action.type){
    case ADD_CART_ITEM : 
      return {...state, cartItems : [...state.cartItems, action.payload]}
    case REMOVE_CART_ITEM : 
      return {...state, cartItems : state.cartItems.filter((item) => item.productId !== action.payload.productId )}
    case INCREASE_CART_ITEM :
      return {...state, cartItems : state.cartItems.map((item) => {
        if(item.productId===action.payload.productId){
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })}
    case DECREASE_CART_ITEM : 
      return {...state, cartItems : state.cartItems.map((item) => {
        if(item.productId===action.payload.productId){
          return {...item, quantity: item.quantity - 1}
        }
        return item
      })}
    case ADD_WISHLIST_ITEM : 
      return {...state, wishlists: [...state.wishlists, action.payload]}
    case REMOVE_WISHLIST_ITEM : 
      return {...state, wishlists: state.wishlists.filter((item)=> item.productId !== action.payload.productId)}
    
  }

}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: ADD_CART_ITEM, payload: { productId: 1, quantity: 3 } });
store.dispatch({ type: ADD_CART_ITEM, payload: { productId: 2, quantity: 2 } });
store.dispatch({ type: ADD_CART_ITEM, payload: { productId: 3, quantity: 5 } });
store.dispatch({ type: ADD_CART_ITEM, payload: { productId: 4, quantity: 4 } });

// store.dispatch({ type: REMOVE_CART_ITEM, payload: { productId: 3 } })
// store.dispatch({ type: REMOVE_CART_ITEM, payload: { productId: 1 } })

store.dispatch({ type: INCREASE_CART_ITEM, payload: { productId: 4 } })
store.dispatch({ type: INCREASE_CART_ITEM, payload: { productId: 1 } })
store.dispatch({ type: DECREASE_CART_ITEM, payload: { productId: 3 } })
store.dispatch({ type: DECREASE_CART_ITEM, payload: { productId: 3 } })


store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 2 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 5 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 6 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 9 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 11 } })

store.dispatch({ type: REMOVE_WISHLIST_ITEM, payload: { productId: 5 } })
