import {combineReducers} from 'redux'
import sellItem from './sell-item'
import bagList from './bag-list'
import navigation from './navigation'
import sustainabilityAboutSlice from './sustainability-about-slice'

const allReducers = combineReducers({
    sellItem: sellItem,
    bagList: bagList,
    navigation: navigation,
    sustainabilityAbout: sustainabilityAboutSlice
})
export default allReducers