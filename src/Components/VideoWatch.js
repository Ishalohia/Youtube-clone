import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import VideoDetailContainer from './VideoDetailContainer';

const VideoWatch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);


  return (
    <div className='flex mt-2 mx-4'>
      {/* Video Container */}
      <div className='flex '>
      <div className="pt-2 flex flex-col">
        {/* video watch */}
        <div className=''>
          <iframe
            width="960" height="515" src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
        {/* Video Details */}
          <div>
            <VideoDetailContainer params={searchParams} />
          </div>
      </div>
        {/* Live Chat */}
        <div className='-ml-10'>
          <LiveChat />
        </div>
      </div>

      {/* Comment Container */}
      <CommentContainer />
    </div>
  );
}

export default VideoWatch;
