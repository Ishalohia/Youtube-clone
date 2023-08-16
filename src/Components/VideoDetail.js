import React, { useState } from "react";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import CommentContainer from "./CommentContainer";

const VideoDetail = ({ info ,params }) => {
  const [Subscribe, setSubscribe] = useState(true);
  const [isLike, setIsLike] = useState(true);
  const [isDislike, setIsDislike] = useState(true);
  const [text] = useState(info[0]?.snippet?.description|| '');
  const [isExpand, setIsExpand] = useState(false);

  const handleLikeClick = () => {
    setIsLike(!isLike);
    setIsDislike(true); // Unselect Dislike when Like is clicked
  };

  const handleDislikeClick = () => {
    setIsDislike(!isDislike);
    setIsLike(!isLike); // Unselect Like when Dislike is clicked
  };


  const less = () => {
    setIsExpand(!isExpand);
  };

  const more = () => {
    setIsExpand(!isExpand);
  };

  const viewNumber = parseInt(info[0]?.statistics.viewCount);
  const viewCount = (viewNumber) => {
    if (viewNumber < 1000) {
      return viewNumber.toString();
    } else if (viewNumber >= 1000 && viewNumber < 1000000) {
      return (viewNumber / 1000).toFixed(1) + "K";
    } else if (viewNumber >= 1000000 && viewNumber < 1000000000) {
      return (viewNumber / 1000000).toFixed(1) + "M";
    } else if (viewNumber >= 1000000000 && viewNumber < 1000000000000) {
      return (viewNumber / 1000000000).toFixed(1) + "B";
    }
  };

   const formatDate = (timestamp) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

 const formatTime = (timestamp) => {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return new Date(timestamp).toLocaleTimeString(undefined, options);
};

  return (

    <div>
    <div className="">
      <div className="font-bold text-xl mt-3">{info[0]?.snippet?.title}</div>
      <div className="flex gap-4 mt-8 ml-4">
        <div className="flex gap-2 cursor-pointer">
          <img
            src={info[0]?.snippet?.thumbnails?.medium?.url}
            width="60px"
            height="60px"
            alt="channel-logo"
            className="rounded-full"
          />
          <div>
            {" "}
            <div className="font-bold ml-2">
              {" "}
              {info[0]?.snippet?.channelTitle}
            </div>
            <div>{info[0]?.statistics?.commentCount} subscribers</div>
          </div>
        </div>
        <div className="cursor-pointer">
          <button onClick={() => setSubscribe(!Subscribe)}>
            {Subscribe ? (
              <button className="rounded-full py-2 px-3 m-2  bg-black text-white">
                Subscribe
              </button>
            ) : (
              <button className="rounded-full py-2 px-3 m-2 bg-gray-200 text-black font-bold">
                Subscribed
              </button>
            )}
          </button>
        </div>
        <button className="flex justify-center items-center ml-30  ">
          {" "}
          <span className="rounded-l-full bg-gray-200 p-2  flex gap-1 items-center hover:bg-gray-300">
            <button onClick={handleLikeClick}>
              {isLike ? (
                <BiLike fontSize="23px" />
              ) : (
                <BiSolidLike fontSize="23px" />
              )}
            </button>

            <div className="font-bold">
              {isLike
                ? Math.floor(info[0]?.statistics?.likeCount /1000) +"k"
                : Math.floor(parseInt(info[0]?.statistics?.likeCount /1000 )+1) + "k"}
            </div>
          </span>
          <div className="rounded-r-full bg-gray-200 px-8 flex gap-1  p-2 hover:bg-gray-300 ">
            {" "}
            <button
               onClick={handleDislikeClick}
              className="border-l-2 border-gray-400 px-2"
            >
              {isDislike ? (
                <BiDislike fontSize="23px" />
              ) : (
                <BiSolidDislike fontSize="23px" />
              )}
            </button>
          </div>
        </button>
        <span className="flex gap-2 bg-gray-200 rounded-full p-2 px-3 m-2 justify-center items-center hover:bg-gray-300 cursor-pointer">
          <TbShare3 fontSize="18px" />
          <div>Share</div>
        </span>
        <span className="flex gap-2 bg-gray-200 rounded-full p-2 px-3 m-2 justify-center items-center hover:bg-gray-300 cursor-pointer">
          <TfiDownload fontSize="15px" />
          <div>Download</div>
        </span>
        <div className="flex gap-2 bg-gray-200 rounded-full p-2 px-3 m-2 justify-center items-center text-center font-bold hover:bg-gray-300 cursor-pointer">
          <button>...</button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-md w-[1000px] p-4 ml-4 mt-8">
      <div className="flex gap-8">
         <div className="font-bold">{viewCount(viewNumber)} views</div>
        <div className="font-semibold">
                Published: {formatDate(info[0]?.snippet?.publishedAt)} at {formatTime(info[0]?.snippet?.publishedAt)}
        </div>
      </div>
       
        <div className="">
          {info[0]?.snippet?.tags?.map((tag) => " #" + tag)}
        </div>

        {isExpand ? (
        <div>
          {text}
          <button onClick={less}>
            <div className="font-bold">...less</div>
          </button>
        </div>
      ) : (
        <div>
          {text.slice(0, 100)}
          <button onClick={more}>
            <div className="font-bold">...more</div>
          </button>
        </div>
      )}
      </div>
      
    </div>
    <div>
      <CommentContainer params={params} comment={info[0]?.statistics?.commentCount}/>
     
     
    </div>
    </div>
    
  );
};

export default VideoDetail;