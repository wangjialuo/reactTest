const defaultState = {
  inputValue: '',
  list: [3, 4]
}
const reducer = (state = defaultState, action) => {
  console.log(action.type);
  if(action.type === 'change_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}
export default reducer
