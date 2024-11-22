export const ADD_WISHLIST_ITEM = "wishlist/addItem";
export const REMOVE_WISHLIST_ITEM = "wishlist/removeItem";

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

