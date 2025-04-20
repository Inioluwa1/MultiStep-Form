import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";
import PlanLinks from "./PlanLinks.jsx"
import PlanLinksCard from "./PlanLinksCard.jsx"
import './PlanSelection.css'

export default function PlanSelection({selected, setSelected, Timeperiod, setTimeperiod}) {
  const navigate = useNavigate();

  const changeTimePeriod = () => {
    setTimeperiod(!Timeperiod)
  }
  const gobacktoInfo = () => {
    navigate("/")
  }
  const movetoaddons = () => {
    if (!selected){
      return
    }
    navigate("/addons")
  }

  return (
    <div className='PlanSelection'>
      <h1 className='PlanSelectionTitle'> Select your plan </h1> 
      <p className='PlanSelectionDetails'> You have the option of monthly or yearly billing</p>

      <div className='PlanSelectionCards'>
        {PlanLinks.map((link, index) => (
          <PlanLinksCard
            key={index}
            image={link.image}
            title={link.title}
            price={`${Timeperiod? link.price: link.price2}`}
            free={`${Timeperiod? "" : link.free}`}
            selected={selected}
            setSelected={setSelected} 
           />
        ))}
      </div>

      <div className='Period'>
        <div className="Time">
          <p className={`Month ${Timeperiod? "" : "choosen"}`}> Monthly </p>
            <div onClick={changeTimePeriod} className='Toggle'>
              {Timeperiod? 
              <BiSolidToggleLeft size={60} />:
              <BiSolidToggleRight size={60} />}
            </div>
          <p className={`Year ${Timeperiod? "choosen" : ""}`}> Yearly </p>
        </div>
      </div>
      
      <div className='Buttons'>
        <p onClick={gobacktoInfo}> Go Back </p>
        <button onClick={movetoaddons}> Next Step </button>
      </div>
    </div>
  )
}
