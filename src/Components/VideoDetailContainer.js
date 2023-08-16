import React, { useEffect, useState } from 'react'
import { VIDEO_INFO_API_URL } from '../utils/config'
import VideoDetail from './VideoDetail'
import { ShimmarForVideoDetail } from './Shimmer'

const VideoDetailContainer = ({params}) => {
 
    const[videoDetail , setVideoDetail] = useState("")
     const getDetail = async()=>{
        const data = await fetch(VIDEO_INFO_API_URL+params.get("v"))
        const json = await data.json()
        setVideoDetail(json.items)
        // console.log(json.items)
     }
         
    useEffect(()=>{
      getDetail()
    })
  return (
    <div>
      { videoDetail?  <VideoDetail info={videoDetail} params={params}/>:(<ShimmarForVideoDetail/>)}
    </div>
  )
}

export default VideoDetailContainer