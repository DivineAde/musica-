import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Chart = ({ id, img, album, artist, duration }) => {
  return (
    <>
      <div className='flex mmd:justify-between md:gap-[9em] px-2 py-3 bg-top rounded-xl'>
          <div className='flex flex-row items-center mmd:gap-2 md:flex-col'>
              <img src={img} alt="img/chart" className='mmd:w-[63px] mmd:h-[63px] md:min-w-[7em]'/>
              <div className=''>
                 <h2 className='text-white text-sm font-medium mt-1 mb-0.5'>{album}</h2>
                 <p className='text-sm text-white opacity-50 mb-2'>{artist}</p>
                 <p className='text-white font-thin'>{duration}</p>
              </div>
          </div>

          <div className='bg-transparent  h-fit w-fit py-4  px-5 rounded-full border-dashed border'>
              <FontAwesomeIcon icon={faHeart} className="text-orange-500 "/>
          </div>
      </div>
    </>
  )
}

export default Chart