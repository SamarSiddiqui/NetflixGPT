import React from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const VideoBg = ({ movieID }) => {
  const trailerKey = useSelector((store) => store?.movies?.trailerVideo);

  useMovieTrailer(movieID);

    // Fallback for when trailerKey is unavailable
   if(!trailerKey) {
    return <Shimmer/>
   }
   
  return (
    <div className="relative   w-screen h-screen overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full  scale-[3] largerMobile:scale-[4.6]"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey +
          "?&mute=1&controls=0&start=10&rel=0&vq=hd720p"
          // autoplay=1
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
