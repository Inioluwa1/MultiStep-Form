import React, { useEffect } from 'react'
import "./PlanLinksCard.css"

export default function PlanLinksCard({link, isMonth, price, selectedName, setSelectedName, setSelectedPrice}) {

const handleSelected = () => {
  setSelectedName(link.title)
  setSelectedPrice(price)
}


  return (
    <div className={`PlanLinksCard ${selectedName === link.title? "selected" : ""}`} onClick={handleSelected}>
      <img src={link.image} alt={link.title} />
      <div className='PlanLinksCardDetails'>
        <h3> {link.title} </h3>
        <p className='price'> ${isMonth? `${link.monthlyPrice}` : `${link.yearlyPrice}`} </p>
        <p className='free'> {isMonth? "" : `${link.free}`} </p>
      </div>
    </div>
  )
} 
 