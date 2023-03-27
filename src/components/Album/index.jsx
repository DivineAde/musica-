import React from 'react'
import Collections from '../utils/Collections'

const Album = ({ endpoint: { record } }) => {
  return (
    <div className='mmd:ml-[10%] pt-10 md:pt-[6em] flex flex-col md:nike-container'>
       <div className='flex items-center gap-3 md:justify-between ml-1 mr-1'>
         <button className="bg-transparent album-btn-one mmd:px-10 w-fit md:w-full  text-white">My collection</button>
         <button className=' album-btn-one bg-amber-300 mmd:px-10 w-fit md:w-full '>My likes</button>
       </div>
       <div className='flex md:flex-col items-center gap-3 mt-10 overflow-scroll scroll-smooth scroll-hidden'>
         {record?.map((music, i) => (
          <Collections {...music} key={i} />
         ))}
       </div>
    </div>
  )
}

export default Album
