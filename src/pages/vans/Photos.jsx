import React from 'react'
import { useOutletContext } from "react-router-dom";

const Photos = () => {
    const { name, type, description, imageUrl } = useOutletContext();
  return (
    <div className="flex">
      <img src={imageUrl} alt="" className="w-1/2"/>
    </div>
  )
}

export default Photos