import React, {Component} from 'react'
import store from './store1'
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'

class Todolist extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.getmyState = this.getmyState.bind(this)
    store.subscribe(this.getmyState)
  }
  getmyState () {
    this.setState(store.getState())
  }
  handleChange (e) {
    const action = {
      type: 'change_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  render () {
    return (
      <div>
        <Input value={this.state.inputValue} onChange={this.handleChange}/>
        <Button>++++</Button>
        <List
          dataSource={this.state.list}
          renderItem={item =>(
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default Todolist
