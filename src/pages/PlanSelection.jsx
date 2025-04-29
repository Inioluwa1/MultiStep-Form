import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";
import PlanLinks from "./PlanLinks.jsx"
import PlanLinksCard from "./PlanLinksCard.jsx"
import './PlanSelection.css'

export default function PlanSelection({selectedName, setSelectedName, setSelectedPrice, isMonth, setisMonth}) {
  const navigate = useNavigate();

  const changeTimePeriod = () => {
    setisMonth(!isMonth)
    setSelectedName("")
    setSelectedPrice("")
  }

  const gobacktoInfo = () => {
    navigate("/")
  }

  const movetoaddons = () => {
    if (!selectedName){
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
            link={link}
            isMonth={isMonth} 
            price = {isMonth? `${link.monthlyPrice}` : `${link.yearlyPrice}`}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
            setSelectedPrice={setSelectedPrice} 
          />
        ))}
      </div>

      <div className='Period'>
        <div className="Time">
          <p className={`Month ${isMonth? "" : "choosen"}`}> Monthly </p>
            <div onClick={changeTimePeriod} className='Toggle'>
              {isMonth? 
              <BiSolidToggleLeft size={60} />:
              <BiSolidToggleRight size={60} />}
            </div>
          <p className={`Year ${isMonth? "choosen" : ""}`}> Yearly </p>
        </div>
      </div>
      
      <div className='Buttons'>
        <p onClick={gobacktoInfo}> Go Back </p>
        <button onClick={movetoaddons}> Next Step </button>
      </div>
    </div>
  )
}
