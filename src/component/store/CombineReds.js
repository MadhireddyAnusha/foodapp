import MenuReducer from './Reducers/MenuReducer'
import {combineReducers} from 'redux'
import CartReducer from './Reducers/CartReducer';

const reducers=combineReducers({
    MenuReducer:MenuReducer,
    CartReducer:CartReducer
})

export default reducers;