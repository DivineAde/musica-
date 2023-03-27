import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Tommorrow = ({ cover, title, genre, icon, duration }) => {
  return (
    <div className='flex justify-between md:nike-container p-3 mt-4 bg-tommorrow-tunez rounded-2xl'>
     <div className='flex gap-3'>
      <img src={cover} />
      <div className=''>
        <p className='text-white'>{title}</p>
        <p className='text-white'>{genre}</p>
      </div>
     </div>

     <div className='flex flex-col justify-between'>
      <FontAwesomeIcon icon={faEllipsisVertical} className="text-orange-400" />
      <p className='text-slate-50'>{duration}</p>
     </div>
    </div>
  )
}

export default Tommorrow
