import React from "react";
import Tommorrow from "../utils/Tommorrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faClipboardList,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const TopChart = ({
  endpoint: { bg_cover, title, description, btn_1, btn_2, btn_3, chart },
}) => {
  return (
    <>
      <div className="mmd:pl-[10%] tommorrow pt-3 md:pt-[6em] flex flex-col">
        <div className="mmd:flex">
          <img src={bg_cover} alt="tomorrow/tunez" className="md:nike-container" />
          <div className="">
            <h1 className="tommorrow_text text-4xl font-bold md:nike-container mt-10">
              {title}
            </h1>
            <p className="text-slate-50 md:nike-container">{description}</p>
            <div className="flex md:justify-between md:gap-2 px-2">
              <button className=" flex items-center w-fit py-2 play rounded-full px-2 text-white">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="text-orange-400"
                />
                {btn_1}
              </button>
              <button className=" flex items-center w-fit py-2 play rounded-full px-2 text-white">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="text-orange-400"
                />
                {btn_2}
              </button>
              <button className=" flex items-center w-fit py-2 play rounded-full px-2 text-white">
                <FontAwesomeIcon icon={faHeart} className=" text-red-700" />
                {btn_3}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          {chart?.map((song, i) => (
            <Tommorrow {...song} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopChart;
