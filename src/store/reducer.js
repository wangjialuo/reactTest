import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_INPUT_VALUE , INIT_LIST_ACTION} from './actionTypes'
const defaultState = {
  inputValue: '123',
  list: [1, 2]
}
// reducer 可以接受state,但是绝对不能修改state
//纯函数是指给定固定的输入,就一定会有固定的输出,而且不会有任何副作用
export default (state = defaultState, action) =>{
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DELETE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  if(action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }
  return state
}
