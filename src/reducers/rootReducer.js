import { combineReducers } from 'redux'
import flowerReducer from './flowerReducer'
import vaseReducer from './vaseReducer'
import selectedFlowerReducer from './selectedFlowerReducer'

const rootReducer = combineReducers({
  flowers: flowerReducer,
  vase: vaseReducer,
  selectedFlower: selectedFlowerReducer,
  //
})


export default rootReducer
