

import React, { useEffect, useRef } from 'react';
import Message from './Message';
import getMessagesHook from '../../Hooks/getMessagesHook';
import MessageSk from '../skeletons/messageSk';
import useListenMessages from '../../Hooks/useListenMessages';

//this code below for sending the messages without any refreshing and errors
//the bugs for displaying the messages after sending it will be solved later 

const Messages = () => {
  const { messages, loading } = getMessagesHook();
  useListenMessages();
  const lastMessage = useRef();


  useEffect(()=>{
      setTimeout(()=>{
        lastMessage.current?.scrollIntoView({behavior : "smooth"});
      },100)
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>


      {!loading && Array.isArray(messages) && messages.length > 0 && messages.map((message) => (
        <div 
          key={message._id}
          ref={lastMessage }>

        <Message  message={message} />
        </div>
      
      ))}
      
      {loading && [...Array(3)].map((_, idx) => <MessageSk key={idx} />)}
      
      
      {!loading && Array.isArray(messages) && messages.length === 0 && (
        <p className='text-center'>Start a conversation here</p>
      )}
    </div>
  );
};


export default Messages;