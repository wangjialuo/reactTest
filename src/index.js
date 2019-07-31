import React from 'react';
import ReactDOM from 'react-dom';
// all in js
// import App from './App';
import TodoList from './TodoList4'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './store2'
//pwa
//https协议服务器
const App =() => (
  <Provider store={store}>
    <TodoList/>
  </Provider>
)

//jsx语法中,我们要使用自己创建的组件
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
