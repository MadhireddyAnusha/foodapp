import {applyMiddleware, createStore} from 'redux'
import Reducers from './CombineReds'
import thunk from 'redux-thunk'

const store=createStore(Reducers,applyMiddleware(thunk))



export default store;