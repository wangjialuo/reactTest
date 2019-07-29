import React from 'react';
import ReactDOM from 'react-dom';
// all in js
// import App from './App';
import TodoList from './TodoList2'
//pwa
//https协议服务器
import * as serviceWorker from './serviceWorker';
//jsx语法中,我们要使用自己创建的组件
ReactDOM.render(<TodoList />, document.getElementById('root'));
serviceWorker.unregister();
