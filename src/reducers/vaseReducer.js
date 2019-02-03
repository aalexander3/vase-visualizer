import { REMOVE_FLOWER, ADD_FLOWER } from '../actions/actionTypes'

const vaseState = {
  flowers: {}
}

const vaseReducer = (state = vaseState, action) => {
  let newState = {...state}
  let name;
  switch (action.type) {
    case REMOVE_FLOWER:
      // removes one flower of that variety from the vase
      // check if the flower name is a key on state
      // if not set it equal to 0
      // else if name is already at 0
      // otherwise decrease the count by 1
      name = action.payload.name;
      if (newState.flowers[name]) {
        if (newState.flowers[name] === 0) {
          newState.flowers[name] = 0
        } else {
          newState.flowers[name] -= 1
        }
      } else {
        newState.flowers[name] = 0
      }
      return newState
    case ADD_FLOWER:
      name = action.payload.name
      // check if the flower name is a key on state
      // if not set it equal to 1
      // otherwise increase the count by 1
      if (newState.flowers[name]) {
        newState.flowers[name] += 1
      } else {
        newState.flowers[name] = 1
      }
      return newState
    default: return state
  }
}

export default vaseReducer
