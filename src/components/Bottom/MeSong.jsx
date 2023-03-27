import React, { useRef } from 'react'
import Bottom from '.'

const MeSong = () => {


  return (
    <div>
      <audio src= "https://justnaija.com/music/download/8319/" ref={audioElem}/>
      <Bottom songs={songs} setSongs={setSongs} isPlaying={isPlaying}  setIsPlaying={setIsPlaying} />
    </div> 
  )
}

export default MeSong
