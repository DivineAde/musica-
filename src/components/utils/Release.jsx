import React from 'react'

const Release = ({ imgsrc }) => {
  return (
    <>
      <div className='relative'>
        <div className='w-full'>
           <img src={imgsrc} alt="release cover" className="min-w-[153px] min-h-[158px] rounded-3xl" />
        </div>
      </div>
    </>
  )
}

export default Release
