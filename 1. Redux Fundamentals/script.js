let state = {
  count: 0
}

function increment(){

  // state.count = state.count + 1 // mutate state

  state = {count: state.count + 1} // immutate state

}

increment()
console.log(state.count)
increment()
console.log(state.count)
increment()
console.log(state.count)