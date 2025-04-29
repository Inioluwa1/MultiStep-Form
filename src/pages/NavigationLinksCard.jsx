import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavigationLinksCard.css'

export default function NavigationLinksCard({link}) {
  const location = useLocation()
  const isActive = location.pathname === link.link

  return (
    <Link className='NavigationLinksCard' to={link.link}>
      <p className={`NavigationLinksCardNumber ${isActive? "Pageactive" : null }`}> {link.id} </p>
      <div className='NavigationLinksCardDetails'>
        <p className='NavigationLinksCardStep'> {link.step} </p>
        <p className='NavigationLinksCardTitle'> {link.info} </p>
      </div>
    </Link>
  )
}
 