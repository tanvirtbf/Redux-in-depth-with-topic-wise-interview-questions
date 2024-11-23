const ADD_CART_ITEM = 'cart/addItem'
const REMOVE_CART_ITEM = 'cart/removeItem'
const INCREASE_CART_ITEM = 'cart/increaseCartItem'
const DECREASE_CART_ITEM = 'cart/decreaseCartItem'

// Action Creators
export const addCartItem = (productId, quantity) => {
  return { type: ADD_CART_ITEM, payload: {productId, quantity} }
}
export const removeCartItem = (productId) => {
  return { type: REMOVE_CART_ITEM, payload: {productId} }
}
export const increaseCartItem = (productId) => {
  return { type: INCREASE_CART_ITEM, payload: {productId}}
}
export const decreaseCartItem = (productId) => {
  return { type: INCREASE_CART_ITEM, payload: {productId}}
}

export default function cartReducer(state=[], action){

  switch(action.type){
    case ADD_CART_ITEM : 
      return [...state, action.payload]
    case REMOVE_CART_ITEM : 
      return state.filter((item) => item.productId !== action.payload.productId)
    case INCREASE_CART_ITEM : 
      return state.map((item) => {
        if(item.productId === action.payload.productId){
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })
    case DECREASE_CART_ITEM : 
      return state.map((item) => {
        if(item.productId === action.payload.productId){
          return {...item, quantity: item.quantity - 1}
        }
        return item
      })
    default : 
      return state
  }

}