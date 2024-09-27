import React from 'react'
import './Home.css';
import { SlideBar } from '../../Components/SlideBar/SlideBar.jsx';
import MConversation from '../../Components/MessageContainer/MConversation.jsx';



export const Home = () => {
  return (
      <div className='flex  justify-center'>

          <div >

            <h1 className='text-white flex justify-center font-bold mb-6 '>this is a messenger from shein</h1>

            <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  justify-center mb-8 p-3'>
              
              <SlideBar />
              <MConversation />
              
            </div>
          </div>
      </div>
    
  )
}
