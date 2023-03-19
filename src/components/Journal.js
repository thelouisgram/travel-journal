import React from 'react'

export default function Journal(props) {

  return (
    <div className='journal'>
        <div><img src={props.img} alt='location'/></div>
        <div className='journal--right'>
            <div className='journal--top'>
              <i class="fa-solid fa-location-dot"></i>
              <h4 className='country'>{props.country}</h4>
              <h4 className='view'>{props.view}</h4>
            </div>
            <h2 className='location'>{props.location}</h2>
            <h4 className='date'>{props.date}</h4>
            <p className='description'>{props.description}</p>
        </div>
    </div>
  )
}
