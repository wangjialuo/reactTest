import React, {Component} from 'react'
import store from './store2'
import {connect} from 'react-redux'

class TodoList4 extends Component {
  constructor (props) {
    super(props)
    // this.state = store.getState()
  }
  render () {
    return (
      <div>
        <input type="text" value={this.props.inputValue} onChange={this.props.handleInputChange}/>
        <button onClick={this.props.handleClick}>提交</button>
        <ul>
          {this.props.list.map(( item,index) => {
            return <li index={item} key={item} onClick={() => {this.props.handleDelete(index)}}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick () {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    handleDelete (index) {
      const action = {
        type: 'delete_item',
        value: index
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList4)
