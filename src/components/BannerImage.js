import React from 'react';
import { IMG_CDN } from '../utils/constants';

const BannerImage = ({ details: backdropPath }) => {
  return (
    <div className="relative w-screen">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      <img
        className="w-screen h-[110vh] largerMobile:h-[100vh] object-cover"
        src={IMG_CDN + backdropPath}
        alt="Movie Banner"
      />
    </div>
  );
};

export default BannerImage;
