const WISHLIST_ADD_ITEM = 'wishlist/addItem'
const WISHLIST_REMOVE_ITEM = 'wishlist/removeItem'

export const addWishlistItem = (productId) => {
  return { type: WISHLIST_ADD_ITEM, payload: {productId} }
}
export const removeWishlistItem = (productId) => {
  return { type: WISHLIST_REMOVE_ITEM, payload: {productId} }
}

export default function wishlistReducer(state=[], action){

  switch(action.type){
    case WISHLIST_ADD_ITEM : 
      return [...state, action.payload]
    case WISHLIST_REMOVE_ITEM : 
      return state.filter((item) => item.productId !== action.payload.productId)
    default : 
      return state
  }

}