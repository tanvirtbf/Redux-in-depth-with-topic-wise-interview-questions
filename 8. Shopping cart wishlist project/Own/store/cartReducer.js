const ADD_CART_ITEM = 'cart/addItem'
const REMOVE_CART_ITEM = 'cart/removeItem'
const INCREASE_CART_ITEM = 'cart/increaseItem'
const DECREASE_CART_ITEM = 'cart/decreaseItem'

export const addCartItem = (productId) => {
  return { type: ADD_CART_ITEM, payload: {productId} }
}
export const removeCartItem = (productId) => {
  return { type: REMOVE_CART_ITEM, payload: {productId} }
}


export default function cartReducer(state=[], action){

  switch(action.type){
    case ADD_CART_ITEM : 
      return [...state, action.payload]
    case REMOVE_CART_ITEM : 
      return state.filter((item) => item.productId !== action.payload.productId)
    default : 
      return state
  }

}