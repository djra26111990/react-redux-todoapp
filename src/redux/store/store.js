import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todosReducer } from '../reducers/reducers'

export default createStore(todosReducer, composeWithDevTools(applyMiddleware(thunk)))