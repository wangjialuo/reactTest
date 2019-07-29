import React, {Component}from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.handleItemDelete(this.props.index)
  }
  render() {
    return <div onClick={this.handleClick} key={this.props.index}>
      { this.props.item }
    </div>
  }
  //一个组件要从父组件接受参数
  //只要父组件的render函数被执行,子组建的这个生命周期函数就会被执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpadte (nextProps, nextState) {
    if (nextProps.item !== this.props.item) {
      return true
    }
    return false
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}
TodoItem.propType ={
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem:PropTypes.func,
  index: PropTypes.number
}
TodoItem.defaultProps = {
  item: 'hello world'
}
export default TodoItem
