import {combineReducers} from 'redux'
import sellItem from './sell-item'

const allReducers = combineReducers({
    sellItem: sellItem,
})
export default allReducers