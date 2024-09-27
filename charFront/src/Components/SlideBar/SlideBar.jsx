import React from "react";
import { Search } from "./Search.jsx";
import { LogOut } from "./LogOut.jsx";
import './SlideBar.css';
import { Conversations } from "../MessageContainer/Conversations.jsx";
import Conversation1 from "../MessageContainer/Conversation1.jsx";

export const SlideBar = () =>{
    return (
        <> 
            <div className="border border-white border-[1px] p-4 height699 overflow-auto">
                    <Search />
                    <div className="divider px-3 "></div>
                
                    <Conversations />
                    
                    <div className=" flex mt-10 marginbot">
                        <LogOut  className="mb-10"/>
                    </div>
                    
            </div>
        </>

    );


}