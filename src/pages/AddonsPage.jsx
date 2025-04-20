import React from 'react'
import AddsonLinks from "./AddonsLink"
import AddsonLinkCard from './AddsonLinkCard'
import { useNavigate } from 'react-router-dom'
import './AddonsPage.css'

export default function AddonsPage({Timeperiod}) {
  const navigate = useNavigate()

  const movetosummary = () => {
    navigate("/summary")
  }
  const gobacktoAddon = () => {
    navigate("/plan-selection")
  }

  return (
    <div className="AddonsPage">
      <h1 className="AddsonPageTitle"> Pick add-ons </h1>
      <p className='AddsonPageDeatils'> Add-ons help enhance your gaming experience </p>
      <div>
        {AddsonLinks.map((addon, index) => (
          <AddsonLinkCard
          key={index}
          service={addon.service}
          details={addon.details}
          price={Timeperiod? addon.price: addon.price2} />
        ))}
      </div>

      <div className='AddonsPageButton'>
        <p onClick={gobacktoAddon}>Go Back </p>
        <button onClick={movetosummary}> Next Step </button>
      </div>
    </div> 
  )
}
