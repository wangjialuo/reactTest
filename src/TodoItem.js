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
}
TodoItem.propType ={
  item: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
  deleteItem:PropTypes.func,
  index: PropTypes.number
}
TodoItem.defaultProps = {
  item: 'hello world'
}
export default TodoItem
