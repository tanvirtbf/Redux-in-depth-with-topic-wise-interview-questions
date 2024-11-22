import { createStore } from "redux";
import { productsList } from "./productsList";

const initialState = {
  productsList : productsList,
  cardItems : [],
  wishList : [],
}

const ADD_CARD_ITEM = 'card/addCardItems'
const REMOVE_CARD_ITEM = 'card/removeCardItems'
const INCREASE_CARD_ITEM = 'card/increaseCardItem'
const DECREASE_CARD_ITEM = 'card/decreaseCardItem'

const ADD_WISHLIST_ITEM = 'wishlist/addItem'
const REMOVE_WISHLIST_ITEM = 'wishlist/removeItem'

function reducer(state=initialState, action) {

  let newState = state;

  switch(action.type) {
    case ADD_CARD_ITEM : 
      newState = {...newState, cardItems : [...newState.cardItems , action.payload]}
      break;
    case REMOVE_CARD_ITEM : 
      newState = {...newState, cardItems : newState.cardItems.filter((item) => item.productId !== action.payload.productId)}
      break;
    case INCREASE_CARD_ITEM : 
      newState = {...newState, cardItems : newState.cardItems.map((item) => {
        if(item.productId === action.payload.productId){
          return {...item, quantity : item.quantity + 1}
        }
      })}
      break;
    case DECREASE_CARD_ITEM : 
      newState = {...newState, cardItems : newState.cardItems.map((item) => {
        if(item.productId === action.payload.productId) {
          return {...item, quantity : item.quantity - 1}
        }
      })}
      break;
  }

  return newState
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.dispatch({type : ADD_CARD_ITEM, payload : { productId : 3, quantity : 2 }})
store.dispatch({type : ADD_CARD_ITEM, payload : { productId : 5, quantity : 3 }})
store.dispatch({type : ADD_CARD_ITEM, payload : { productId : 2, quantity : 2 }})

store.dispatch({type : REMOVE_CARD_ITEM, payload: { productId : 3 }})
store.dispatch({type : REMOVE_CARD_ITEM, payload: { productId : 2 }})

store.dispatch({type : INCREASE_CARD_ITEM, payload : {productId : 5}})
store.dispatch({type : INCREASE_CARD_ITEM, payload : {productId : 5}})
store.dispatch({type : INCREASE_CARD_ITEM, payload : {productId : 5}})

store.dispatch({type : DECREASE_CARD_ITEM, payload : {productId : 5}})
store.dispatch({type : DECREASE_CARD_ITEM, payload : {productId : 5}})

store.subscribe(()=>{
  console.log(store.getState())
})

