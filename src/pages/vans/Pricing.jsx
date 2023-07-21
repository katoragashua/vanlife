import React from 'react'
import { useOutletContext } from "react-router-dom";

const Pricing = () => {
    const { name, type, description, price } = useOutletContext();
  return (
    <div className="flex items-baseline">
      <h3 className="font-semibold">${price}</h3>
      <span>/day</span>
    </div>
  )
}

export default Pricing