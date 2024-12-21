import React from 'react';
import BannerImage from './BannerImage';
import BannerDetails from './BannerDetails';

const Banner = ({ details }) => {
  // Random index based on the details array length
  const randomIndex = Math.floor(Math.random() * details.length);

  // Extracting random series details and backdrop path
  const seriesDetails = details[randomIndex];
  const backdropPath = seriesDetails?.backdrop_path;

  return (
    <div className="relative">
      <BannerImage details={backdropPath} />
      <BannerDetails details={seriesDetails} />
    </div>
  );
};

export default Banner;
