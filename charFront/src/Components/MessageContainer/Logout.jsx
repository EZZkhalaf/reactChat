import React from "react";
import { CiLogout } from "react-icons/ci";
import './Message.css';

const Logout =() =>{
    return(
        <>
            <div>

               <button className="logbutton">  <CiLogout /> </button>
            </div>
        
        
        </>
    )
}

export default Logout;