import { GET_FLOWERS, SELECT_FLOWER } from './actionTypes'

export const addFlowersToList = (flowers) => {
  return {
    type: GET_FLOWERS,
    payload: flowers.data
  }
}

export const selectFlower = (flower) => {
  return {
    type: SELECT_FLOWER,
    payload: flower
  }
}
