// VideoContainer.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideoInfo, setVideoInfo } from '../utils/VideoSlice';
import VideoCards from './VideoCards';
import { Shimmer } from './Shimmer';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videoInfo);

  useEffect(() => {
    dispatch(fetchVideoInfo());
  }, [dispatch]);

  const handleVideoClick = (video) => {
    dispatch(setVideoInfo(video));
  };

  if (!videos) return null;

  return (
    <div className='max-h-screen overflow-y-auto p-4'>
      {videos.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCards info={video} onClick={handleVideoClick} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
