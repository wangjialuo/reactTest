import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas'


// import thunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  // applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);
const store = createStore(reducer, enhancer)
sagaMiddleware.run(TodoSagas)
export default store
