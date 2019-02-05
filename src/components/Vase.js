import React from 'react'
import Flower from './Flower'
import { connect } from 'react-redux'
import './../styles/Vase.css'


const Vase = ({ vase }) => {

  const newFlower = () => {
    let flowers = vase.flowers
    let flowerArr = []
    for (let flower in flowers) {
      let { count } = flowers[flower]
        for(let i=0; i < count; i++){
          flowerArr.push(<Flower key={`${flower}-${i}`} name={flower} />)
        }
    }
    return flowerArr
  }

  return (
    <div className="vase-section" >
      { newFlower() }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    vase: state.vase
  }
}

export default connect(mapStateToProps)(Vase)
