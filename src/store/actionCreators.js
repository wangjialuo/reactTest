import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_INPUT_VALUE} from "./actionTypes";

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

