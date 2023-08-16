// VideoCards.js
import React from 'react';

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const viewNumber = parseInt(statistics.viewCount);
  
  const viewCount = (viewNumber) => {
    if (viewNumber < 1000) {
      return viewNumber.toString();
    } else if (viewNumber >= 1000 && viewNumber < 1000000) {
      return (viewNumber / 1000).toFixed(1) + 'K';
    } else if (viewNumber >= 1000000 && viewNumber < 1000000000) {
      return (viewNumber / 1000000).toFixed(1) + 'M';
    } else if (viewNumber >= 1000000000 && viewNumber < 1000000000000) {
      return (viewNumber / 1000000000).toFixed(1) + 'B';
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full h-72'>
      <div className='h-36 md:h-44 lg:h-56 overflow-hidden -mb-16'>
        <img
          src={thumbnails.medium.url}
          alt='thumbnails'
          className='object-cover h-40 w-96 p-1'
        />
      </div>
      <div className='p-3 md:p-4 lg:p-3'>
        <h3 className='text-md font-bold mb-1 line-clamp-2'>{title}</h3>
        <p className='text-gray-600 font-semibold text-sm mb-1'>{channelTitle}</p>
        <p className='text-gray-600 font-semibold text-sm mb-1'>{viewCount(viewNumber)} views</p>
      </div>
    </div>
  );
};

export default VideoCards;
