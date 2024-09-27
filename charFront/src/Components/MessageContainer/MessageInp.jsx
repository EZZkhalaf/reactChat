import React, { useEffect, useState } from 'react'
import { BsSend } from "react-icons/bs";
import sendMessageHook from '../../Hooks/sendMessageHook';

export const MessageInp = () => {

    const [message , setMessage] = useState("");
    const {loading , messageFetch} = sendMessageHook();

    const handlesubmit = async(e) =>{
        e.preventDefault();
        if(!message) return;
        await messageFetch(message);
        setMessage('');
    }

  return (
    <>
        <form className='px-4 my-3 items-center'
            onSubmit={handlesubmit}
        >
            <div className='w-full relative items-center'>
                <input type="text" 
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 text-white placeholder:text-black'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="items-center border-l-3 border-white">
                    <button type='submit' className='absolute inset-y-8 end-0 flex items-center pe-3 hover:bg-white border-l-3 border-white'>
                        {loading ? <div className='loading loading-spinner mt-4'></div> : (
                            <BsSend className='mb-5 rounded-full w-7 h- transform transition-transform duration-300 hover:bg-gray-500 hover:scale-110'/>
                        )}
                    </button>
                </div>

            </div>

        </form>
    </>
  )
}
