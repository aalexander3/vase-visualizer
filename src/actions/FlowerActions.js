import { ADD_FLOWERS } from './actionTypes'

export const addFlowersToList = (flowers) => {
  console.log(flowers);
  return {
    type: ADD_FLOWERS,
    payload: flowers.data
  }
}
