import React from 'react'
import './NavigationPage.css'
import NavigationLinks from '../pages/NavigationLinks.jsx'
import NavigationLinksCard from './NavigationLinksCard.jsx'

export default function NavigationPage() {
  return (
    <div className='NavigationPage'>
      <div className='NavigationLinksContainer'>
        {NavigationLinks.map((link, index) => (
          <NavigationLinksCard 
            key={index}
            link={link}
          />
        ))}
      </div>
    </div>
  )
}
