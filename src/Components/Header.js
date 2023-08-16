/* eslint-disable react-hooks/exhaustive-deps */
import menuBar from "../assets/header/menuBar.svg"
import logo from "../assets/header/Logo.svg"
import search from "../assets/header/search.svg"
import userIcon from "../assets/header/userIcon.svg"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/AppSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_SEARCH_API } from "../utils/config"
import { cacheResult } from "../utils/SearchSlice"

const Header = () => {  
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());    // to dispatch an action when menu is clicked
  //we didn't pass anything inside toggleMenu as it does not take anything it does not have any payload,we can see in appSlice
  }

  const [searchQuery, setSearchQuery] = useState(""); //initially it would be empty string 
  const [suggestion, setSuggestion] = useState([]); //initially it would be empty array
  const [showSuggestion, setShowSuggestion] = useState(false); //initially it would be false
  const searchCache =  useSelector(store => store.search) //subscribing /read  to the cache

  //Here, I'm making an API call after every keyPress but declining the api call when difference between two keyStroke become less than 200ms. 
  useEffect (()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){     //firstly ,if it's present in my cache don't make an api call directly set my data from cache
        setSuggestion(searchCache[searchQuery]); 
      } else{
         getSearchQuery()
      }}, 200);  //means make this api call after 200ms
    return () =>{
      clearTimeout(timer); //whenever we use setTimeOut we need to clear that also because if we don't clear it then it will keep on running in the background, this return will call when the component is unmounted / again refreshing. 
    }
  },[searchQuery]) //everytime my searchQuery changes i need to make an api call so as dependecy I'm passing searchQuery


  const getSearchQuery = async() =>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const response  = await data.json();
    console.log(response[1]);
    setSuggestion(response[1]);
    dispatch(cacheResult({
      [searchQuery]: response[1],
    }));
  }

  return (
    <div className='flex px-4 justify-between mt-3 pb-3 shadow-lg'>
    {/* Menu */}
        <div className='flex gap-6'>
            <img
               onClick={()=>toggleMenuHandler()} 
               src={menuBar} alt="menu-Bar" 
               width={40} height={40} 
               className="cursor-pointer"
             />
              <a href="/" className="mt-1">
                 <img src={logo} alt="logo" width={90} height={40}/>
             </a>
        </div>
    {/* SearchBar */}
    <div className="">
        <div className='flex border w-96 border-black rounded-lg justify-between p-2'>
                <input type="text" placeholder='search here'
                value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus ={()=>setShowSuggestion(true)}
                onBlur ={()=>setShowSuggestion(false)}
                />
                <img className="" src={search} alt="search" width={20} height={40}/>
        </div>
       {showSuggestion && (
        <div className=' fixed bg-white border border-gray-200 rounded-lg  shadow-lg w-96 z-10 mt-2 px-4 py-1 ' >
          <ul>
            {suggestion.map((s)=>(
              <li key={s} className="hover:bg-gray-100">{s}</li>
            ))}
          </ul>
        </div>
        )}
    </div>

    {/* User Deatils */}
        <div>
        <button className="flex border border-black p-1 rounded-lg items-center gap-2 mr-4">
        <img src={userIcon} alt="user-icon" width={20} height={40}/>
         login
        </button>
        </div>
    </div>
  )
}

export default Header
