export const ADD_WISHLIST_ITEM = "wishlist/addItem";
export const REMOVE_WISHLIST_ITEM = "wishlist/removeItem";

export const addWishlist = (productId) => {
    return { type: ADD_WISHLIST_ITEM, payload: { productId } }
}
export const removeWishlist = (productId) => {
    return { type: REMOVE_WISHLIST_ITEM, payload: { productId } }
}

export default function wishlistsReducer(state=[], action){
    switch(action.type){
        case ADD_WISHLIST_ITEM : 
            return [...state, action.payload]
        case REMOVE_WISHLIST_ITEM : 
            return state.filter((item)=> item.productId !== action.payload.productId)
        default : 
            return state
        
      }
}

