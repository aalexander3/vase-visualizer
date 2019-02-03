import React from 'react'
import { connect } from 'react-redux'
import { selectFlower } from '../actions/FlowerActions'


const FlowerItem = ({ flower, selectFlower }) => {
  return (
    <h3 className="flower-item" onClick={() => selectFlower(flower)}>{flower.name}</h3>
  )
}

export default connect(null, { selectFlower })(FlowerItem)
