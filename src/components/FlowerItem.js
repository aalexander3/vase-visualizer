import React from 'react'

// clicking on a flower item sets it as the previewed (selected flower)
// TODO:
// sync the click event to an action
// dispatch the action to the right reducer

const FlowerItem = ({ flower }) => {
  return (
    <div>{flower.name}</div>
  )
}

export default FlowerItem
