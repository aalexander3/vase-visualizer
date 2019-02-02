import { ADD_FLOWERS } from './actionTypes'

export const addFlowersToList = (flowers) => {
  return {
    type: ADD_FLOWERS,
    payload: flowers.data
  }
}
