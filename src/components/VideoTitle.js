import React from "react";

const VideoTitle = ({ props }) => {
  let { original_title, overview, release_date, first_air_date, name } = props;

  return (
    <div className=" w-full h-screen aspect-video pt-[27%] top-0 z-10  px-20 absolute text-white bg-gradient-to-t from-black cursor-default ">
      <div className=" absolute top-44 left-20  smallerTab:left-8 largerMobile:top-28 ">
        <div className="flex items-center text-[clamp(30px,5vw,50px)] ">
          <h1
            style={{ textShadow: "4px 3px 6px black" }}
            className="text-white  font-bold hover:underline "
          >
            {original_title || name}
          </h1>
        </div>
        <div className=" flex items-center ">
          <p className="bg-gray-300/30  text-center py-1 px-2 font-bold my-8 rounded-md text-[clamp(13px,1.5vw,20px)] whitespace-nowrap ">
            Released on: {release_date || first_air_date}
          </p>
        </div>
        <div className="w-1/2 bg-gray-300/30 text-white rounded-md p-3  pb-3 largerMobile:w-[100%] smallerTab:w-[70vw] ">
          <p className="line-clamp-4 smallerTab:line-clamp-6">{overview}</p>
        </div>
        {/* Buttons */}
        <div className=" mt-7 font-bold text-lg smallerTab:text-sm">
          <button className=" p-2 px-3 text-black bg-gray-300/50  rounded-md  hover:scale-[1.03] hover:bg-gray-300/80">
            <i class=" fa-solid fa-play mr-1"></i> Play Now
          </button>
          <button className=" p-2 px-3 text-white  bg-gray-500/50 mx-5 rounded-md hover:scale-[1.03] hover:bg-gray-500/100 ">
            <i class="fa-solid fa-circle-info text-white mr-2"></i>More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
