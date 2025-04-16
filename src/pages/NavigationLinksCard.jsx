import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavigationLinksCard.css'

export default function NavigationLinksCard({number, step, info, link}) {
  const location = useLocation()
  const isActive = location.pathname === link

  return (
    <Link className='NavigationLinksCard' to={link}>
      <p className={`NavigationLinksCardNumber ${isActive? "Pageactive" : null }`}> {number} </p>
      <div className='NavigationLinksCardDetails'>
        <p className='NavigationLinksCardStep'> {step} </p>
        <p className='NavigationLinksCardTitle'> {info} </p>
      </div>
    </Link>
  )
}
