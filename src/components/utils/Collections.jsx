import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Collections = ({ cover, title, singer, likes }) => {
  return (
    <>
      <div className="w-[100%] relative">
        <img
          src={cover}
          alt="album/cover"
          className="md:w-full mmd:min-w-[213px] mmd:min-h-[234px] rounded-3xl"
        />
        <div className="absolute top-1/2 left-0 p-5">
          <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
          <p className="text-xs  text-slate-50 opacity-30">{singer}</p>
          <p className="text-slate-100 text-sm mt-4">{likes}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPlay}
            className="absolute bottom-[20%] right-8 bg-orange-400 pt-1.5 pr-2 pl-2 pb-1.5 rounded-full text-orange-500"
          />
        </div>
      </div>
    </>
  );
};

export default Collections;
