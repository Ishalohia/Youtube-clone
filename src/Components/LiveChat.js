import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName, generateRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);

  const [liveMessage, setLiveMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: 'Isha Lohia',
        message: liveMessage,
      })
    );
    setLiveMessage('');
  };

  return (
    <div className='flex flex-col  h-[515px] justify-between bg-gray-100 border border-gray-200 rounded-lg p-2 w-[26rem] '>
    <p className='text-xl font-bold mb-2'>Live chat</p>
      <div className='overflow-y-scroll '>
        <div className='flex flex-col-reverse'>
          {/* Chat messages */}
          {chatMessage.map((message, index) => (
            <ChatMessage key={index} name={message.name} message={message.message} />
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className='flex mt-4'>
        {/* Input and button */}
        <input
          className='w-full border border-black mr-2 rounded-lg px-2'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className='border border-green-500 p-1 rounded-lg bg-green-300 text-md'>Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
