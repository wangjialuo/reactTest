import { takeEvery, put } from 'redux-saga/effects'
import {GET_INIT_CREATE} from './actionTypes.js'
import axios from 'axios'
import  {initListAction} from './actionCreators'
function * getInitCreate() {
  try {
    const res =  yield axios.get('http://localhost:2000/api/todolist')
    yield put(initListAction(res.data))
  } catch (e) {
    console.log('失败')
  }
}
function* mySaga() {
  yield takeEvery(GET_INIT_CREATE, getInitCreate);
}

export default mySaga;
