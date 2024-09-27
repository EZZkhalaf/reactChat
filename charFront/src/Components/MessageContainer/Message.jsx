import React from "react";

import useConversation from "../../zustand/useConversation";
import {  useAuthContext } from "../../context/authContext";
import { extractTime } from "../../../../backend/utils/Time";

const Message =({message}) =>{

    
    const {auth_user} = useAuthContext();
    const {selectedConvo} = useConversation();
    const currentUser = message.senderId === auth_user._id;
    const timeEdit = extractTime(message.createdAt);

    const className = currentUser ? "chat-end" : "chat-start";  //to define the shape of the messagePassing if its from the current user or the other user 
    const profilePic = currentUser ? auth_user.profilepicture : selectedConvo.profilepicture;
    const messageColor = currentUser ? 'bg-blue-500' : '';

    return (
        <>
        <div className={`chat ${className}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img src={profilePic} 
                alt="user " 
                className="roundPhoto"/>


                </div>


            </div>
            <div className={`chat-bubble text-white bg-blue-500  ${messageColor}`}> {message.message } </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
                    {timeEdit}
            </div>
            
        </div>
        
        </>
    )
}

export default Message;
