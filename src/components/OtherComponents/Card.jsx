import React from 'react'
import './Card.css'

function Card({icon,title,para}) {
   
  return (
    <div className='card display-flex'>
      <h1 className='card-icon'>{icon}</h1>
      <h3 className='card-title font-400'>{title}</h3>
      <p className='card-para main-para'>{para}</p>
    </div>
  )
}

export default Card
