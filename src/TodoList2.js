import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoListUi from './TodoListUi'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitCreate} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete =  this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleInputChange (e) {
    store.dispatch(getInputChangeAction(e.target.value))
  }
  handleStoreChange () {
   this.setState(store.getState())
  }
  handleBtnClick () {
    store.dispatch(getAddItemAction())
  }
  handleItemDelete (index) {
    store.dispatch(getDeleteItemAction(index))
  }
  render () {
    return (
      <div>
        <TodoListUi
          inputValue={this.state.inputValue}
          handleInputChange = {this.handleInputChange}
          handleBtnClick = {this.handleBtnClick}
          list = {this.state.list}
          handleItemDelete = {this.handleItemDelete}
        ></TodoListUi>
      </div>
    )
  }
  componentDidMount () {
    const action = getInitCreate()
    console.log(action)
    store.dispatch(action)
  }
}

export default TodoList
