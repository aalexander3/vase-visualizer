import { ADD_FLOWER, REMOVE_FLOWER } from './actionTypes'
// increase flower count
// decrease flower count

export const addFlower = (flower) => {
  console.log(flower)
  return {
    type: ADD_FLOWER,
    payload: flower
  }
}

export const removeFlower = (flower) => {
  return {
    type: REMOVE_FLOWER,
    payload: flower
  }
}
