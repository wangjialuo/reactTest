import React, {Component, Fragment} from 'react'
import Test from './Test'
import TodoItem from './TodoItem'

class TodoList extends Component{
  constructor (props) {
    // 当组件的state或者props发生改变的时候,render函数就会重新执行
    super(props)
    this.state = {
      inputValue: '323',
      list: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

  }
  handleInputChange (e) {
    const value = e.target.value
    this.setState(()=> ({
      inputValue: value
    }))
  }
  handleSubmit () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleItemDelete (index) {
    this.setState((prevState) =>{
      const list = prevState.list
      list.splice(index, 1)
      return {
        list,
        inputValue: ''
      }
    })
  }
  getTodoItem () {
    return  this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      )
    })
  }
  render () {
    return (
      <Fragment>

        <div>
          <label htmlFor="insertArea">请输入</label>
          <input type="text"
                 id="insertArea"
                 value={this.state.inputValue}
                 onChange={this.handleInputChange}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
        <Test inputValue={this.state.inputValue}></Test>
      </Fragment>
    )
  }
}
export default TodoList
