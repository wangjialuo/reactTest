import React, {Component, Fragment} from 'react'
import axios from 'axios'
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
    const value = this.input.value
    this.setState(()=> ({
      inputValue: value
    }))
  }
  handleSubmit () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
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
  //组件被挂在页面之前
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    axios.get('http://172.17.12.43:2000/api/todolist').then(res => {
      this.setState(() => ({
        list: res.data
      }))
    })
    console.log('componentDidMount')
  }
  //组件更新之前,会自动被执行
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  //组件更新之前他会自动执行他在shouldComponentUpdate之后执行
  //如果shouldComponentUpdate返回true他执行
  //如果shouldComponentUpdate返回false他不执行
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  //组件更新完成之后执行
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  render () {
    console.log('render')
    return (
      <Fragment>

        <div>
          <label htmlFor="insertArea">请输入</label>
          <input type="text"
                 id="insertArea"
                 ref={(input) => {this.input = input}}
                 value={this.state.inputValue}
                 onChange={this.handleInputChange}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
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
