import React, { useEffect, useState } from 'react'

const SubTotal = ({ iteam }) => {

  const [price, setPrice] = useState(0);

  const TotalAmount = () => {
    let price = 0;
    iteam.map((iteam) => {
      price += iteam.price.cost
    });
    setPrice(price)
  }

  useEffect(() => {
    TotalAmount();
  }, [iteam])

  return (
    <div className='sub_item'>
      <h3>Subtotal ({iteam.length} item) : <strong> Rs.{price} </strong></h3>
    </div>
  )
}

export default SubTotal