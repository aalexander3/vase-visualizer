import { GET_FLOWERS } from '../actions/actionTypes'

const flowerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FLOWERS:
      return action.payload
    default: return state
  }
}

export default flowerReducer
