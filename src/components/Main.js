import React from 'react'
import travels from './travelData'
import Journal from './Journal'

export default function Main() {
    const travelList = travels.map(travel => {
        return <Journal key={travel.id} {...travel} />
    })
  return (
    <div className='content'>
        {travelList}
    </div>
  )
}
