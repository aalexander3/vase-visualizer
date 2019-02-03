import React from 'react'
import { connect } from 'react-redux'
import { addFlower, removeFlower } from '../actions/VaseActions'

const FlowerButtons = ({ addFlower, removeFlower, selectedFlower }) => {

  return (
    <div>
      <button onClick={() => removeFlower(selectedFlower)} >-</button>
      <button onClick={() => addFlower(selectedFlower)} >+</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedFlower: state.selectedFlower
  }
}

export default connect(mapStateToProps, { addFlower, removeFlower })(FlowerButtons)
