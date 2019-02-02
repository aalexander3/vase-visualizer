import { combineReducers } from 'redux'
import flowerReducer from './flowerReducer'
import vaseReducer from './vaseReducer'

const rootReducer = combineReducers({
  flowers: flowerReducer,
  vase: vaseReducer,
  // selectedFlower: ,
  //
})


export default rootReducer
