import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_INPUT_VALUE, INIT_LIST_ACTION, GET_INIT_CREATE} from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = (value) => ({
  type: ADD_TODO_ITEM,
  value
})
export const getDeleteItemAction = (value) => ({
  type: DELETE_INPUT_VALUE,
  value
})

export const initListAction = (value) => ({
  type: INIT_LIST_ACTION,
  value
})
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('http://localhost:2000/api/todolist').then((res) => {
//       const data = res.data
//       dispatch(initListAction(data))
//     })
//   }
// }
export const getInitCreate = () =>({
  type: GET_INIT_CREATE,
})
