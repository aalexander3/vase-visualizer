import { SELECT_FLOWER } from '../actions/actionTypes'


const selectedFlowerReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_FLOWER: return action.payload
    default: return state
  }
}

export default selectedFlowerReducer
