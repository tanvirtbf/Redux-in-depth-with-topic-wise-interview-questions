import { createStore } from "redux";

function actionObj(type, payload={}){
  return { type : type, payload : payload}
}

const initialState = {
  post : 0, 
  name : 'Tanvir Ahmed',
  age : 25,
}

function reducer(state=initialState, action){

  return newState
}

const {dispatch, getState, subscribe} = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

subscribe(()=> {
  console.log(getState())
})
