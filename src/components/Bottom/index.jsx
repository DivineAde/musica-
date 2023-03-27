import React, { useState } from "react";
import "./index.css";
import songPlaying from "../../assets/Burna-Boy-Alone-ArtWork.jpeg";
import songTwo from "../../assets/kpe paso.webp";
import songthree from "../../assets/Money&love.jpeg"
import songFour from "../../assets/Adekunle party.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuffle,
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faRepeat,
  faVolumeHigh,
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { songData } from "../Player/audio";
import Songs from "../Player/Songs";

const Bottom = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [maxTime, setMaxTime] = useState(0);

  const music = [
    {
      artist: "Burna boy",
      title: "Alone",
      imgsrc: songPlaying,
      url: "https://www.trendyhiphop.com/wp-content/uploads/2022/11/Burna_Boy_-_Alone.mp3",
    },
    {
      artist: "Wandecoal ft Olamide",
      title: "Kpe paso",
      imgsrc: songTwo,
      url: "https://www.trendyhiphop.com/wp-content/uploads/2023/02/Wande_Coal_Ft_Olamide_-_Kpe_Paso.mp3",
    },
    {
      artist: "Wizkid",
      title: "Money and love",
      imgsrc: songthree,
      url: "https://www.trendyhiphop.com/wp-content/uploads/2022/10/Wizkid_-_Money_Love.mp3",
    },
    {
      artist: "Adekunle Gold ft Zino",
      title: "Party no dey stop",
      imgsrc: songFour,
      url: "https://www.trendyhiphop.com/wp-content/uploads/2023/03/Adekunle_Gold_Ft_Zinoleesky_-_Party_No_Dey_Stop.mp3",
    },
    {
      artist: "Davido",
      title: "risky",
      imgsrc: "",
      url: "https://www.xclusivesongs.com/wp-content/uploads/2022/09/Davido_ft_Popcaan_-_Risky.mp3",
    },
    {
      artist: "Seyi vibez",
      title: "Chance",
      imgsrc: "",
      url: "https://www.six9ja.com/wp-content/uploads/2022/11/Seyi_Vibez_-_Chance_Na_Ham_.mp3",
    },
  ];

  const handlePlayPause = () => {
    const audio = document.getElementById("myAudio");
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.src = music[currentSongIndex].url;
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleNextSong = () => {
    if (currentSongIndex === music.length - 1) {
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handlePreviousSong = () => {
    if (currentSongIndex === 0) {
      setCurrentSongIndex(music.length - 1);
    } else {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const handleVolumeChange = (event) => {
    const audio = document.getElementById("myAudio");
    setVolume(event.target.value);
    audio.volume = event.target.value;
  };

  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
    setMaxTime(event.target.duration);
  };

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 h-28 w-full bg-bottoms z-50 mmd:pl-[10em] flex items-center justify-around">
        <div className="flex items-center gap-x-4">
          <img
            src={music[currentSongIndex].imgsrc}
            alt="songPlaying/img"
            className="w-[5em] h-[5em] rounded-lg"
          />
          <div>
            <p className="text-white text-sm">{music[currentSongIndex].artist}</p>
            <p className="text-orange-400 text-sm">{music[currentSongIndex].title}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-x-3">
          <FontAwesomeIcon icon={faShuffle} className="text-slate-50 w-6 h-6" />
          <FontAwesomeIcon
            icon={faBackwardStep}
            onClick={handlePreviousSong}
            className="text-slate-50 w-7 h-7 cursor-pointer"
          />
          <button onClick={handlePlayPause}>
            {isPlaying ? (
              <FontAwesomeIcon
                icon={faPauseCircle}
                className="active w-7 h-7"
              />
            ) : (
              <FontAwesomeIcon icon={faPlayCircle} className="active w-7 h-7" />
            )}
          </button>
          <FontAwesomeIcon
            icon={faForwardStep}
            onClick={handleNextSong}
            className="text-slate-50 w-7 h-7 cursor-pointer"
          />
          <FontAwesomeIcon icon={faRepeat} className="text-slate-50 w-6 h-6" />
          </div>
          <div>
          <input
            type="range"
            className="w-64 md:w-32 my-range"
            min="0"
            max={maxTime}
            value={currentTime}
            onChange={(e) => {
              const audio = document.getElementById("myAudio");
              audio.currentTime = e.target.value;
              setCurrentTime(e.target.value);
            }}
          />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faVolumeHigh} className="text-slate-50 block md:hidden" />
          <input
            className="block md:hidden"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          <div className="text-white hidden">
            {formatTime(currentTime)} / {formatTime(maxTime)}
          </div>
        </div>
        <audio
          id="myAudio"
          src={music[currentSongIndex].url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={(event) => setMaxTime(event.target.duration)}
        ></audio>
      </div>
    </>
  );
};

export default Bottom;
