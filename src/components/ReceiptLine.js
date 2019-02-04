import React from 'react'
import pluralize from 'pluralize'

const ReceiptLine = ({ flower, count, price }) => {
  // @ {flower.price} = {parseFloat(flower.price) * flowers[flower]}</h3>)

  return (
    <div>
      <h4>{count} {pluralize(flower, count)} @ {price} = {"$" + (parseFloat(price.split('$')[1]) * count).toFixed(2)}</h4>
    </div>
  )
}

export default ReceiptLine
