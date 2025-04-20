import React, { useEffect } from 'react'
import "./PlanLinksCard.css"

export default function PlanLinksCard({image, title, price, free, selected, setSelected}) {

const handleSelected = () => {
  setSelected(title)  
}


  return (
    <div className={`PlanLinksCard ${selected === title? "selected" : ""}`} onClick={handleSelected}>
      <img src={image} alt={title} />
      <h3> {title} </h3>
      <p className='price'> ${price} </p>
      <p className='free'> {free} </p>
    </div>
  )
} 
