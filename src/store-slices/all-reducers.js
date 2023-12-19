import {combineReducers} from 'redux'
import sellItem from './sell-item'
import bagList from './bag-list'

const allReducers = combineReducers({
    sellItem: sellItem,
    bagList: bagList,
})
export default allReducers