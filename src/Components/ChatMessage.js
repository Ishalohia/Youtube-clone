import React from 'react'
import userIcon from "../assets/header/userIcon.svg"

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex '>
     <div className='flex items-center mt-2'>
      <img src={userIcon} alt="user-icon" className='w-8 h-8 '/>
      <span className='font-bold px-2'>{name} </span>
      <span>{message}</span>
      </div>
    </div>
    
  )
}

export default ChatMessage
