import React, { Component } from 'react'
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'
import store from './store'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
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
        <Input value={this.state.inputValue}
               placeholder={"todoInfo"}
               style={{width: 300, marginRight: '10px'}}
               onChange ={this.handleInputChange}
        />
        <Button
          type="primary"
          onClick={this.handleBtnClick}
        >提交</Button>
        <List
          style={{marginTop: '10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) =>(
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
               {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoList
