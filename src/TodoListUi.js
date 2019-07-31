import React from 'react'
import {Input, Button, List} from 'antd'
const TodoListUi = (props) => {
  return (
    <div>
      <Input value={props.inputValue}
             placeholder={"todoInfo"}
             style={{width: 300, marginRight: '10px'}}
             onChange ={props.handleInputChange}
      />
      <Button
        type="primary"
        onClick={props.handleBtnClick}
      >提交</Button>
      <List
        style={{marginTop: '10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) =>(
          <List.Item onClick={() => {props.handleItemDelete(index)}}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}
// class TodoListUi extends Component{
//   render() {
//     return (<div>
//       <Input value={this.props.inputValue}
//              placeholder={"todoInfo"}
//              style={{width: 300, marginRight: '10px'}}
//              onChange ={this.props.handleInputChange}
//       />
//       <Button
//         type="primary"
//         onClick={this.props.handleBtnClick}
//       >提交</Button>
//       <List
//         style={{marginTop: '10px'}}
//         bordered
//         dataSource={this.props.list}
//         renderItem={(item, index) =>(
//           <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
//             {item}
//           </List.Item>
//         )}
//       />
//     </div>)
//   }
// }
export default TodoListUi
