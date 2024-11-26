import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name : 'product',
  initialState : {
    loading: false,
    list: [],
    error: ''
  },
  reducers: {
    fetchProducts(state){
      state.loading=true
    },
    fetchProductsError(state,action){
      state.error = action.payload || 'Something went wrong'
    },
    updatedProducts(state,action){
      state.loading=false
      state.list = action.payload
    }
  }
})

const { fetchProducts, fetchProductsError, updatedProducts } = slice.actions

export default slice.reducer











// import { createSlice } from '@reduxjs/toolkit'

// const slice = createSlice({
//   name: 'product',
//   initialState: {
//     loading: false,
//     list: [], 
//     error: ''
//   },
//   reducers: {
//     fetchProducts(state){
//       state.loading = true
//     },
//     fetchProductsError(state, action){
//       state.loading = false
//       state.error = action.payload || 'Something went wrong'
//     },
//     updateAllProducts(state, action){
//       state.loading = false
//       state.list = action.payload
//     },
//   }
// })

// export const { updateAllProducts, fetchProducts, fetchProductsError } = slice.actions

// export default slice.reducer


