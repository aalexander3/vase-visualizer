import { REMOVE_FLOWER, ADD_FLOWER } from '../actions/actionTypes'

const vaseState = {
  flowers: {}
}

const vaseReducer = (state = vaseState, action) => {
  let newState = {...state}
  let name;
  switch (action.type) {
    case REMOVE_FLOWER:
      name = action.payload.name;
      if (newState.flowers[name]) {
        if (newState.flowers[name].count !== 0) {
          newState.flowers[name].count -= 1
        }
      } else {
        newState.flowers[name] = {
          count: 0,
          price: action.payload.price
        }
      }
      return newState
    case ADD_FLOWER:
      name = action.payload.name
      if (newState.flowers[name]) {
        newState.flowers[name].count += 1
      } else {
        newState.flowers[name] = {
          count: 1,
          price: action.payload.price
        }
      }
      return newState
    default: return state
  }
}

export default vaseReducer
