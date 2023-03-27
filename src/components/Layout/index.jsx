import React, { useRef, useState } from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import Bottom from '../Bottom'
import { songData } from '../Player/audio'

const Layout = () => {
  const [songs, setSongs] = useState(songData)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songData[0])
  const audioElem = useRef()

  return (
    <div>
      <Sidebar />
      <Nav />
      <div>
      <audio src= "https://justnaija.com/music/download/8319/" ref={audioElem}/>
      <Bottom songs={songs} setSongs={setSongs} isPlaying={isPlaying}  setIsPlaying={setIsPlaying} />
    </div> 

      <Outlet />
    </div>
  )
}

export default Layout
