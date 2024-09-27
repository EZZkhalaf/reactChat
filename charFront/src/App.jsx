// import React from 'react'

// import { Login } from './pages/login/Login';
// import Register from './pages/register/Register';
// import { Home } from './pages/home/Home.jsx';
// import './App.css';
// import './index.css'
// import { Navigate, Route , Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { useAuthContext } from './context/authContext.jsx';
// const App = () =>{
//   const {auth_user} = useAuthContext();
//   return (
    
//       <div className='back '>

//       <Routes>
//           <Route path='/' element = { auth_user ? <Navigate to='/' /> : <Login />  } />


//           <Route path='/login' element ={auth_user ? <Navigate to='/' /> : <Login /> } />

//           <Route path='/register' element ={ auth_user ? <Navigate to='/' /> : <Register /> } />



//       </Routes>
//       <Toaster />
//       </div>
      
    
      
      
   
//   )
// }

// export default App;


import React from 'react';
import { Login } from './pages/login/Login';
import Register from './pages/register/Register';
import { Home } from './pages/home/Home.jsx';
import './App.css';
import './index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/authContext.jsx';

const App = () => {
  const { auth_user } = useAuthContext(); // Correct usage of useAuthContext hook

  return (
    <div className='back'>
      <Routes>
        {/* Redirect to /home if the user is authenticated, else show the login page */}
        <Route path='/' element={auth_user ? <Home /> : <Navigate to='/login' />} />
        
        <Route path='/login' element={auth_user ? <Navigate to='/home' /> : <Login />} />
        
        <Route path='/register' element={auth_user ? <Navigate to='/home' /> : <Register />} />
        
        <Route path='/home' element={auth_user ? <Home /> : <Navigate to='/login' />} />
      </Routes>
      
      <Toaster />
    </div>
  );
};

export default App;
