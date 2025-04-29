import React from 'react'
import './AddsonLinkCard.css'
import { MdCheckBoxOutlineBlank, MdCheckBox  } from "react-icons/md";

export default function AddsonLinkCard({addon, isMonth, toggleAddon}) {

  return (
    <div className='AddsonLinkCard'>
      <div onClick={() => toggleAddon(addon.id)} className='AddsonLinkCardCheckBox'>
        {addon.selected? 
        <MdCheckBox size={30} color='rgb(78, 65, 219)' />: 
        <MdCheckBoxOutlineBlank size={30} /> }
      </div>

      <div className='AddsonLinkCardDetails'>
        <h2> {addon.service} </h2>
        <p> {addon.details} </p>
      </div>
          <p className='Duration'> +${isMonth? `${addon.monthlyPrice}` : `${addon.yearlyPrice}`} </p>
          
    </div>
  )
}
