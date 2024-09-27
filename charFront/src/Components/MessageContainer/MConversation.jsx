

// import React from "react";
// import Messages from './Messages.jsx';
// import './Message.css';
// import { MessageInp } from "./MessageInp.jsx";
// const MConversation = () => {
//   const noChatselected = true;
//   return (
//     <>
//     <div className="flex flex-col space-y-4 border-2 border-white width69">
//      {!noChatselected ? <NoChat /> : (
      
//         <div>
//            <div className="md:min-w-[450px] flex bg-blue-500 items-center ">
//               <span className="label-text text-white  ml-3">To:</span>
//               <span className="text-gray-50 font-bold ml-5"> fat cat</span>
//             </div>

//           {/* Adding space between the recipient and Messages component */}
//             <Messages />
//             <MessageInp />
//         </div>
//      ) }
//     </div>
//     </>
//   );
// };


// export default MConversation;

// export const NoChat = () =>{
//   return (
//     <div className="flex items-center justify-center w-full h-full ">
//       <div  className="px-4 text-center sm:text-lg md:text-xl text-blue-300
//        font-semibold flex flex-col items-center gap-2">
//           <p>welcome fatcat</p>
//           {/* <TiMessages className="text-3xl md:text-6xl text-center"/> */}
//       </div>
//     </div>
//   )
// }



import React, { useEffect } from "react";
import Messages from './Messages.jsx';
import { MessageInp } from "./MessageInp.jsx";
import useConversation from "../../zustand/useConversation.js";



const MConversation = () => {
  const {selectedConvo , setSelectedConvo} = useConversation();

  useEffect(() => {//to clean up the selected conv na drestart everything 
    
    
    return () => setSelectedConvo(null);
  },[setSelectedConvo]);
  return (
    <>
    <div className="flex flex-col space-y-4 border-2 border-white width69">
    
      
        
           {!selectedConvo ? <NoChat/> : (
            <>
              <div className="md:min-w-[450px] flex bg-blue-500 items-center ">
              <span className="label-text text-white font-bold ml-3">To :</span>
              <span className="text-gray-50 font-bold ml-5">{selectedConvo.fullName}</span>
            </div>

          {/* Adding space between the recipient and Messages component */}
          

            <Messages />
            <MessageInp />
            </>
           )}
          
        
     
    </div>
    </>
  );
};


export default MConversation;

export const NoChat = () =>{
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div  className="px-4 text-center sm:text-lg md:text-xl text-blue-300
       font-semibold flex flex-col items-center gap-2">
          <p>welcome fatcat</p>
          {/* <TiMessages className="text-3xl md:text-6xl text-center"/> */}
      </div>
    </div>
  )
}