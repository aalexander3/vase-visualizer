import React from 'react'
import { connect } from 'react-redux'
import ReceiptLine from './ReceiptLine'

const PriceCalculator = ({ vase }) =>{
  const counter = () => {
    const { flowers } = vase
    const flowerMap = []
    for (let flower in flowers) {
      flowerMap.push(<ReceiptLine key={flower} flower={flower} count={flowers[flower].count} price={flowers[flower].price} />)
    }
    return flowerMap
  }

  const total = () => {
    const { flowers } = vase
    let totalPrice = 0
    for (let flower in flowers) {
      let count = flowers[flower].count
      let price = flowers[flower].price

      totalPrice += (parseFloat(price.split('$')[1]) * count)
    }
    return <h3>${totalPrice.toFixed(2)}</h3>
  }

  return (
    <div className='price-calculator'>
      {counter()}
      {total()}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    vase: state.vase
  }
}

export default connect(mapStateToProps)(PriceCalculator)
