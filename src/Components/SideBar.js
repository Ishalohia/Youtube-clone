import React from 'react'
import home from "../assets/Sidebar/Home.svg"
import shorts from "../assets/Sidebar/Shorts.svg"
import subscription from "../assets/Sidebar/Subscription.svg"
import library from "../assets/Sidebar/Library.svg"
import history from "../assets/Sidebar/History.svg"
import videos from "../assets/Sidebar/Videos.svg"
import watchLater from "../assets/Sidebar/WatchLater.svg"
import like from "../assets/Sidebar/like.svg"
import trending from "../assets/Sidebar/trending.svg"
import shopping from "../assets/Sidebar/shopping.svg"
import music from "../assets/Sidebar/music.svg"
import movies from "../assets/Sidebar/movies.svg"
import live from "../assets/Sidebar/live.svg"
import gaming from "../assets/Sidebar/gaming.svg"
import news from "../assets/Sidebar/news.svg"
import sports from "../assets/Sidebar/sports.svg"
import learning from "../assets/Sidebar/learning.svg"
import fashion from "../assets/Sidebar/fashion.svg"
import settings from "../assets/Sidebar/settings.svg"
import reportHistory from "../assets/Sidebar/reportHistory.svg"
import help from "../assets/Sidebar/help.svg"
import feedback from "../assets/Sidebar/feedback.svg"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  // we need to subscribe to specific portion of our Store 
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  //* early return Pattern ->  means if false then it will not go to next lines of this code 
  //* we can also pass as yernary operators,
  if(!isMenuOpen) return (
    // <div>
    //      <ul className='ml-2 w-12 pt-2'>
    //      <Link to="/">
    //       <li className='gap-2 pb-5 text-sm'>
    //         <img src={home} alt="home" width={24} height={24} className='ml-2'/>
    //         Home
    //       </li>
    //       </Link>
    //        <li className='gap-2 pb-5 text-sm'>
    //         <img src={shorts} alt="home" width={24} height={24} className='ml-2'/>
    //         Shorts
    //       </li>
    //       <li className='gap-2 pb-5 text-sm'>
    //         <img src={subscription} alt="home" width={24} height={24} className='ml-2'/>
    //         Subscribe
    //       </li>
    //       <li className='gap-2 pb-5 text-sm'>
    //         <img src={library} alt="home" width={24} height={24} className='ml-2'/>
    //         Library
    //       </li>
    //       <li className='gap-2 pb-5 text-sm'>
    //         <img src={history} alt="home" width={24} height={24} className='ml-2'/>
    //         History
    //        </li>
    //       </ul>
    // </div>
    <div></div>
  ); 

    return (
    <div className='flex flex-col p-2 shadow-lg w-48 ml-1 col-span-1 z-10 bg-white'>
    {/* First Part */}
      <div>
        <ul className='pb-1'>
        <Link to="/">
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={home} alt="home" width={24} height={24}/>
            Home
          </li>
          </Link>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={shorts} alt="home" width={24} height={24}/>
            Shorts
          </li>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={subscription} alt="home" width={24} height={24}/>
            Subscription
          </li>
        </ul>
      </div>

    {/* Second Part */}
      <div className='border-t-2 border-gray-500 py-5 '>
        <ul>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={library} alt="home" width={24} height={24}/>
            Library
          </li>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={history} alt="home" width={24} height={24}/>
            History
           </li>
          <li className='flex pl-1 gap-2 pb-3'>
             <img src={videos} alt="home" width={24} height={24}/>
            Your Videos
          </li>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={watchLater} alt="home" width={24} height={24}/>
            Watch Later
           </li>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={like} alt="home" width={24} height={24}/>
            Liked Videos
          </li>
        </ul>
      </div>
 
    {/* Third part */}
    <h1 className='font-bold py-5 border-t-2 border-gray-500 ml-1'>Subscriptions</h1>
      <div className=''>
        <ul>
            <li className='flex pl-1 gap-2 pb-3'>
              Namste JavaScript
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              Love Babbar
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              T-Series
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              Amazon Prime Video
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              Netflix
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              Red Chilli Entertainment
            </li>
        </ul>
      </div>

      {/* Explore */}
       <h1 className='font-bold my-5 border-t-2 border-gray-500 ml-1'>Explore</h1>
      <div className=''>
        <ul className='pb-1'>
            <li className='flex pl-1 gap-2 pb-3'>
              <img src={trending} alt="trending" width={24} height={24}/>
              Trending
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
               <img src={shopping} alt="shopping" width={24} height={24}/>
              Shopping
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              <img src={music} alt="shopping" width={24} height={24}/>
              Music
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              <img src={movies} alt="shopping" width={24} height={24}/>
              Movies
            </li>
            <li className='flex pl-1 gap-1 pb-3'>
              <img src={live} alt="shopping" width={24} height={24}/>
              Live
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              <img src={gaming} alt="shopping" width={24} height={24}/>
              Gaming
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              <img src={news} alt="shopping" width={24} height={24}/>
               News
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              <img src={sports} alt="shopping" width={24} height={24}/>
              Sports
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              <img src={learning} alt="shopping" width={24} height={24}/>
              Learning
            </li>
            <li className='flex pl-1 gap-2 pb-3'>
              <img src={fashion} alt="shopping" width={24} height={24}/>
              Fashion & Beauty
            </li>
        </ul>
      </div>

      {/* Setting */}
      <div className='border-t-2 border-gray-500 my-3 pt-3'>
        <ul className='pb-1'>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={settings} alt="shopping" width={24} height={24}/>  
            Settings
          </li>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={reportHistory} alt="shopping" width={24} height={24}/>  
            Report History
          </li>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={help} alt="shopping" width={24} height={24}/>
            Help
          </li>
          <li className='flex pl-1 gap-2 pb-3'>
            <img src={feedback} alt="shopping" width={24} height={24}/>
            Send Feedback
          </li>
        </ul>
      </div>
        
    </div>
  )
}

export default SideBar
