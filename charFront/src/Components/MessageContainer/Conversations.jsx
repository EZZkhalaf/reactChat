// import React from "react";
// import Conversation1 from "./Conversation1";
// import './Message.css';
// import getConversationHook from "../../Hooks/getConversationHook";
// import { getRandomEmoji } from "../../../../backend/utils/emojis";

// export const Conversations = () =>{
//     const {loading , conversations}=getConversationHook();
    
    
//     return (
//         <div>
//             <div className="py-2 px-4 flex flex-col flex-1 overflow-auto">

//                 {loading ?
//                         <span className="loading loading-spinner"></span> : (
//                     conversations.map((conversation ,idx) =>{
//                             <Conversation1 
//                                 key={conversation._id}
//                                 conversation ={conversation}
//                                 emoji = {getRandomEmoji()}
//                             />
                         
//                     })
//                 )}
                
                
                 

                
                
//             </div>
//         </div>
      

//     );


// }

import React from "react";
import Conversation1 from "./Conversation1";
import getConversationHook from "../../Hooks/getConversationHook";
import { getRandomEmoji } from "../../../../backend/utils/emojis";

export const Conversations = () => {
    const { loading, conversations } = getConversationHook();

    return (
        <div>
            <div className="py-2 px-4 flex flex-col flex-1 overflow-auto">
                {loading ? (
                    <span className="loading loading-spinner"></span>
                ) : (
                    conversations.map((conversation, idx) => (
                        <Conversation1 
                            key={conversation._id}
                            conversation={conversation}
                            emoji={getRandomEmoji()}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
