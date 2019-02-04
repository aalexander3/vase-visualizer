import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import FlowerButtons from './FlowerButtons'
import PriceCalculator from './PriceCalculator'
import './../styles/SelectedFlower.css'

const SelectedFlower = ({ selectedFlower }) => {
  const renderFlower = () => {
    return (
      <Fragment>
        <h3>{selectedFlower && selectedFlower.name}</h3>
        <img className="selected-flower-image" src={selectedFlower.image} alt={selectedFlower.name}/>
        <p>{selectedFlower.aroma}</p>
        <p>{selectedFlower.qualities}</p>
        <p>{selectedFlower.price}</p>
        <FlowerButtons />
        <PriceCalculator />
      </Fragment>
    )
  }

  return (
    <div className="selected-flower">
      { selectedFlower.name ? renderFlower() : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedFlower: state.selectedFlower
  }
}

export default connect(mapStateToProps)(SelectedFlower)
