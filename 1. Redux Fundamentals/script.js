let reduxState = {
  post: 0,
  name : 'Tanvir Ahmed',
  age: 25,
}

function reducer(state, action) {
  if(action.type === 'post/increment'){
    return {...state, post : state.post + 1}
  }else if(action.type === 'post/decrement'){
    return {...state, post : state.post - 1}
  }else if(action.type === 'post/incrementBy'){
    return {...state, post : state.post + action.payload}
  }else if(action.type === 'post/decrementBy'){
    return {...state, post : state.post - action.payload}
  }
  return state
}

reduxState = reducer(reduxState, {type : 'post/increment'})
console.log(reduxState) // {post: 1, name: 'Tanvir Ahmed', age: 25}
reduxState = reducer(reduxState, {type : 'post/increment'})
console.log(reduxState) // {post: 2, name: 'Tanvir Ahmed', age: 25}
reduxState = reducer(reduxState, {type : 'post/increment'})
console.log(reduxState) // {post: 3, name: 'Tanvir Ahmed', age: 25}
reduxState = reducer(reduxState, {type : 'post/decrement'})
console.log(reduxState) // {post: 2, name: 'Tanvir Ahmed', age: 25}
reduxState = reducer(reduxState, {type : 'post/increment'})
console.log(reduxState) // {post: 3, name: 'Tanvir Ahmed', age: 25}
reduxState = reducer(reduxState, {type : 'post/increment'})
console.log(reduxState) // {post: 4, name: 'Tanvir Ahmed', age: 25}
reduxState = reducer(reduxState, {type : 'post/decrement'})
console.log(reduxState) // {post: 3, name: 'Tanvir Ahmed', age: 25}


reduxState = reducer(reduxState, {type : 'post/incrementBy', payload: 1})
console.log(reduxState) // {post: 4, name: 'Tanvir Ahmed', age: 25}
reduxState = reducer(reduxState, {type : 'post/incrementBy', payload: 4})
console.log(reduxState) // {post: 8, name: 'Tanvir Ahmed', age: 25}
reduxState = reducer(reduxState, {type : 'post/decrementBy', payload: 3})
console.log(reduxState) // {post: 5, name: 'Tanvir Ahmed', age: 25}
