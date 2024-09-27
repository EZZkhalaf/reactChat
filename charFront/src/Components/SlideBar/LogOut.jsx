import React from 'react';
import { CgLogOut } from "react-icons/cg";
import logoutHook from '../../Hooks/logoutHook';

export const LogOut = () => {
const {loading , logoutFetch} = logoutHook(); 
  return (
    <div className='mt-auto '>
      {!loading ?(
        <button className='bg-blue-500 text-white p-2 rounded-full transform transition-transform duration-300 hover:bg-gray-500 hover:scale-110'
        onClick={logoutFetch}
      >
        <CgLogOut size={18  } 
        />
      </button>
      ) : (
        <span className='loading loading-ring'></span>
      )}
    </div>
  );
};
