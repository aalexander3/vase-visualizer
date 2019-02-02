import { ADD_FLOWERS } from '../actions/actionTypes'

const flowerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FLOWERS:
      return action.payload
    default: return state
  }
}

export default flowerReducer
