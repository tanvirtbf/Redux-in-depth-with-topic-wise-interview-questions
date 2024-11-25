import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

const slice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addWishListItem(state, action){
      state.push(action.payload)
    },
    removeWishListItem(state, action){
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1)
    }
  }
})


export const {addWishListItem, removeWishListItem} = slice.actions

export default slice.reducer



// // Action Types
// const WISHLIST_ADD_ITEM = 'wishList/addItem'
// const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

// // Action Creators
// export function addWishListItem(productData) {
//   return { type: WISHLIST_ADD_ITEM, payload: productData }
// }
// export function removeWishListItem(productId) {
//   return { type: WISHLIST_REMOVE_ITEM, payload: { productId } }
// }

// // Reducer
// export default function wishListReducer(state = [], action) {
//   switch (action.type) {
//     case WISHLIST_ADD_ITEM:
//       const existingItem = state.find((item)=> item.productId === action.payload.productId)
//       if(!existingItem){
//         return [...state, action.payload]
//       }
//       return state
//     case WISHLIST_REMOVE_ITEM:
//       return state.filter(
//         (wishListItem) => wishListItem.productId !== action.payload.productId
//       )
//     default:
//       return state
//   }
// }
