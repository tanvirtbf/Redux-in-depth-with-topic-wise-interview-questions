import { createStore } from "redux"

const initialState = {
  post: 0,
  name : 'Tanvir Ahmed',
  age: 25,
}

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASEBY = 'post/increaseBy'
const DECREASEBY = 'post/decreaseBy'

function reducer(state=initialState, action) {
  switch(action.type){
    case INCREMENT : 
      return {...state, post : state.post + 1}
      break;
    case DECREMENT : 
      return {...state, post : state.post - 1}
      break;
    case INCREASEBY : 
      return {...state, post : state.post + action.payload}
      break;
    case DECREASEBY : 
      return {...state, post : state.post - action.payload}
      break;
    default : 
      return state 
  }

  // if(action.type === INCREMENT){
  //   return {...state, post : state.post + 1}
  // }else if(action.type === DECREMENT){
  //   return {...state, post : state.post - 1}
  // }else if(action.type === INCREASEBY){
  //   return {...state, post : state.post + action.payload}
  // }else if(action.type === DECREASEBY){
  //   return {...state, post : state.post - action.payload}
  // }
  // return state

}

console.log(createStore(reducer))

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({type : INCREMENT})
store.dispatch({type : INCREMENT})
store.dispatch({type : DECREASEBY, payload : 3})
store.dispatch({type : INCREASEBY, payload : 5})






// let reduxState = {
//   post: 0,
//   name : 'Tanvir Ahmed',
//   age: 25,
// }

// function reducer(state, action) {
//   if(action.type === 'post/increment'){
//     return {...state, post : state.post + 1}
//   }else if(action.type === 'post/decrement'){
//     return {...state, post : state.post - 1}
//   }else if(action.type === 'post/incrementBy'){
//     return {...state, post : state.post + action.payload}
//   }else if(action.type === 'post/decrementBy'){
//     return {...state, post : state.post - action.payload}
//   }
//   return state
// }

// reduxState = reducer(reduxState, {type : 'post/increment'})
// console.log(reduxState) // {post: 1, name: 'Tanvir Ahmed', age: 25}
// reduxState = reducer(reduxState, {type : 'post/increment'})
// console.log(reduxState) // {post: 2, name: 'Tanvir Ahmed', age: 25}
// reduxState = reducer(reduxState, {type : 'post/increment'})
// console.log(reduxState) // {post: 3, name: 'Tanvir Ahmed', age: 25}
// reduxState = reducer(reduxState, {type : 'post/decrement'})
// console.log(reduxState) // {post: 2, name: 'Tanvir Ahmed', age: 25}
// reduxState = reducer(reduxState, {type : 'post/increment'})
// console.log(reduxState) // {post: 3, name: 'Tanvir Ahmed', age: 25}
// reduxState = reducer(reduxState, {type : 'post/increment'})
// console.log(reduxState) // {post: 4, name: 'Tanvir Ahmed', age: 25}
// reduxState = reducer(reduxState, {type : 'post/decrement'})
// console.log(reduxState) // {post: 3, name: 'Tanvir Ahmed', age: 25}

// reduxState = reducer(reduxState, {type : 'post/incrementBy', payload: 1})
// console.log(reduxState) // {post: 4, name: 'Tanvir Ahmed', age: 25}
// reduxState = reducer(reduxState, {type : 'post/incrementBy', payload: 4})
// console.log(reduxState) // {post: 8, name: 'Tanvir Ahmed', age: 25}
// reduxState = reducer(reduxState, {type : 'post/decrementBy', payload: 3})
// console.log(reduxState) // {post: 5, name: 'Tanvir Ahmed', age: 25}



// // Another Example : 
// let state = {
//   count : 0, 
//   name : 'Tanvir Ahmed', 
//   age : 25
// }

// const reducer = (state, action) => {

//   let newState = state

//   switch(action.type){
//     case 'count/increment' : 
//       newState = {...newState, count : newState.count + action.payload.amount}
//       break;
//     case 'name/update' : 
//       newState = {...newState, name : action.payload.updatedName}
//       break;
//     case 'age/decrement' : 
//       newState = {...newState, age : newState.age - action.payload.decreaseAge}
//       break;
//   }

//   return newState
// }

// console.log(state) // {count: 0, name: 'Tanvir Ahmed', age: 25}

// state = reducer(state, {type : 'count/increment', payload : { amount : 1 }})
// console.log(state) // {count: 1, name: 'Tanvir Ahmed', age: 25}

// state = reducer(state, {type : 'name/update', payload : { updatedName : 'Tanver' }})
// console.log(state) // {count: 1, name: 'Tanver', age: 25}

// state = reducer(state, {type : 'age/decrement', payload : { decreaseAge : 5 }})
// console.log(state) // {count: 1, name: 'Tanver', age: 20}
