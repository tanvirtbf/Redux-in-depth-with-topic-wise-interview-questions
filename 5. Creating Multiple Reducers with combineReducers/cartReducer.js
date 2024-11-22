export const ADD_CART_ITEM = "cart/addCart";
export const REMOVE_CART_ITEM = "cart/removeCart";
export const INCREASE_CART_ITEM = "cart/increasaeCart";
export const DECREASE_CART_ITEM = "cart/decreaseCart";

export default function cartReducer(state=[], action){

    switch(action.type){
        case ADD_CART_ITEM : 
            return [...state, action.payload]
        case REMOVE_CART_ITEM : 
            return state.filter((item)=> item.productId !== action.payload.productId)
        case INCREASE_CART_ITEM :
            return state.map((item)=> {
                if(item.productId===action.payload.productId){
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        case DECREASE_CART_ITEM : 
            return state.map((item)=> {
                if(item.productId===action.payload.productId){
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            })
        default : 
            return state
      }
}