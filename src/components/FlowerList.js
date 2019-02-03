import React from 'react'
import FlowerItem from './FlowerItem'
import './../styles/FlowerList.css'
import { connect } from 'react-redux'


const FlowerList = ({ flowers }) => {
  const flowerMap = flowers.map(flower => <FlowerItem key={ flower._id } flower={flower} />)

  return (
    <div className="flower-list">{flowerMap}</div>
  )
}

const mapStateToProps = state => {
  return {
    flowers: state.flowers
  }
}

export default connect(mapStateToProps)(FlowerList)
