import React from "react";
import getConversationHook from "../../Hooks/getConversationHook";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/socketContext";


 const Conversation1 = ({conversation , emoji }) =>{
    const {selectedConvo , setSelectedConvo } =   useConversation();

    const isSelected = selectedConvo?._id === conversation._id;//for define the selected convo using zustand hook
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);


    return (
        
        <div>
                <div className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer

                    ${isSelected ? "bg-sky-500" : ""}
                `}
                onClick={()=> setSelectedConvo(conversation)}
                
                
                >
                    <div className={`avatar ${isOnline ? "online" : " "}`}>
                        <div className="w-10 h-10 rounded-full ">
                            <img src={conversation.profilepicture} alt="user " className="roundPhoto"/>
                                                        
                        </div>
                    
                    </div>
                
                    <div className="flex flex-col flex-1">
                        <div className="flex gap-3 justify-between">
                            <p className="font-mono text-gray-300"> {conversation.fullName}</p>
                            <span className="text-x1">{emoji}</span>
                        </div>
                    </div>

            </div>
        </div>
          
        

    );


}

export default Conversation1;