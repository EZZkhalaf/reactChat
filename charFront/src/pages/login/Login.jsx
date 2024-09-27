import React, { useState } from 'react';
import { useAuthContext } from '../../context/authContext';
import loginHook from '../../Hooks/loginHook';

export const Login = () => {
  const [userName , setUser] = useState('');
  const [password , setPass] = useState('');  
  const {loading , loginFetch}  = loginHook();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(userName , password)
    await loginFetch(userName , password);


  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>


        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-gray-300 py-2">
            <i className="login__icon fas fa-user text-gray-500 mr-2"></i>
            <input
              type="text"
              className="flex-1 focus:outline-none focus:border-blue-500"
              placeholder="Username"
              value={userName}
              onChange={(e)=> setUser(e.target.value)}
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <i className="login__icon fas fa-lock text-gray-500 mr-2"></i>
            <input
              type="password"
              className="flex-1 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e)=> setPass(e.target.value)}
            />
          </div>



          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              disabled = {loading}
            >  
            {loading ? <span className='loading loading-spinner'></span> : "Login"}
            {/* <span className="font-semibold">Log In</span>
            <i className="button__icon fas fa-chevron-right ml-2"></i> */}
          </button>


          <div className="text-center mt-4">
            <a href="/register" className="text-blue-500 hover:underline">
              Don't have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
