import { createStore } from "redux";

function actionObj(type, payload={}){
  return { type : type, payload : payload}
}

const initialState = {
  post : 0, 
  name : 'Tanvir Ahmed',
  age : 25,
}

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASEBY = 'post/increaseBy'
const DECREASEBY = 'post/decreaseBy'

function reducer(state=initialState, action){

  let newState = state

  switch(action.type) {
    case INCREMENT : 
      newState = {...newState, post : newState.post + action.payload}
      break;
    case DECREMENT : 
      newState = {...newState, post : newState.post - action.payload}
      break;
    case INCREASEBY : 
      newState = {...newState, post : newState.post + action.payload.amount}
      break;
    case DECREASEBY : 
      newState = {...newState, post : newState.post - action.payload.amount}
      break;
  }

  return newState
}

const {dispatch, getState, subscribe} = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

dispatch(actionObj(INCREMENT, 3))
dispatch(actionObj(INCREMENT, 4))
dispatch(actionObj(DECREMENT, 2))
dispatch(actionObj(DECREMENT, 1))
dispatch(actionObj(DECREMENT, 2))
dispatch(actionObj(INCREASEBY, {amount: 5}))
dispatch(actionObj(DECREASEBY, {amount: 4}))

subscribe(()=> {
  console.log(getState())
})
