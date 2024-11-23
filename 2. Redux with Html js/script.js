import { createStore } from "redux";

const initialState = {
  post : 0, 
  name : 'Tanvir Ahmed',
  age : 25,
}

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASEBY = 'post/increaseBy'
const DECREASEBY = 'post/decreaseBy'

const reducer = (state=initialState, action) => {
  switch(action.type){
    case INCREMENT : 
      return {...state, post : state.post + 1}
    case DECREMENT : 
      return {...state, post : state.post - 1}
    case INCREASEBY : 
      return {...state, post : state.post + action.payload}
    case DECREASEBY : 
      return {...state, post : state.post - action.payload}
    default : 
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.dispatch({type : INCREMENT})
store.dispatch({type : DECREMENT})
store.dispatch({type : INCREASEBY, payload : 3})
store.dispatch({type : DECREASEBY, payload : 2})

store.subscribe(()=>{
  console.log(store.getState())
})
