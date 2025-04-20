import React, { useEffect, useState } from 'react'
import './AddsonLinkCard.css'
import { MdCheckBoxOutlineBlank, MdCheckBox  } from "react-icons/md";

export default function AddsonLinkCard({service, details, price}) {
  useEffect(
    () => {
      if (service === "Customizable Profile") {
        setCheck(false)
      }
    }, [])

  const [check, setCheck] = useState
  (true)

  const handleToggle = () => {
    setCheck(!check)
  }

  return (
    <div className='AddsonLinkCard'>
      <div onClick={handleToggle} className='AddsonLinkCardCheckBox'>
        {check? 
        <MdCheckBox size={30} color='rgb(78, 65, 219)' />: 
        <MdCheckBoxOutlineBlank size={30} /> }
      </div>

      <div className='AddsonLinkCardDetails'>
        <h2> {service} </h2>
        <p> {details} </p>
      </div>
      <p className='Duration'> +${price}</p>
    </div>
  )
}
