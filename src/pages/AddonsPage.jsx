import React, {useEffect, useState} from 'react'
import AddsonLinks from "./AddonsLink"
import AddsonLinkCard from './AddsonLinkCard'
import { useNavigate } from 'react-router-dom'
import './AddonsPage.css'

export default function AddonsPage({isMonth}) {
  
  const [Addon, setAddon] = useState(
    AddsonLinks.map(addon => (
      {...addon, 
        selected: addon.id === 1 || addon.id === 2} // Default selected add-ons
      )) 
    )

  // useEffect(() => {
  //   const savedaddons = JSON.parse(localStorage.getItem('Addons'))
  // }, [])

  const toggleAddon = (id) => {
    setAddon(prev => prev.map(addon => 
      addon.id === id? {...addon, selected: !addon.selected} : addon
    ))
  }

  const navigate = useNavigate()

  const movetosummary = () => {
    const selectedAddons = Addon.filter(addon => addon.selected)
    // localStorage.setItem('Addons', JSON.stringify(selectedAddons))

    navigate("/summary", {state: {selectedAddons}})
  }

  const gobacktoAddon = () => {
    navigate("/plan-selection")
  }

  return (
    <div className="AddonsPage">
      <h1 className="AddsonPageTitle"> Pick add-ons </h1>
      <p className='AddsonPageDeatils'> Add-ons help enhance your gaming experience </p>
      <div>
        {Addon.map((addon, index) => (
          <AddsonLinkCard
          key={index}
          addon={addon}
          toggleAddon = {toggleAddon}
          isMonth={isMonth} />
        ))}
      </div>

      <div className='AddonsPageButton'>
        <p onClick={gobacktoAddon}>Go Back </p>
        <button onClick={movetosummary}> Next Step </button>
      </div>
    </div> 
  )
}
