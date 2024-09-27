import React, { useState } from "react";
import './SlideBar.css';
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import getConversationHook from "../../Hooks/getConversationHook";
import toast from "react-hot-toast";

export const Search = () =>{
    const [search , setSearch]= useState('');
    const {setSelectedConvo} = useConversation();
    const {conversations} = getConversationHook();


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!search) return;
        if(search.length < 2 ){
            return toast.error("be more specific");
        }
        //a simple search algo 
        const conversation =  conversations.find((c) =>c.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
            setSelectedConvo(conversation);
            setSearch('');
        }else{
            toast.error("no user found ");
        }
    
         

    }
    return (
        <>  <div>
                <form className="flex items-center gap-2 "
                    onSubmit={handleSubmit}>
                    <input type="text " placeholder="Search" 
                        className="input input-bordered rounded-full h-9" 
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
                        />
                    <button type="submit" className="btn btn-circle bg-slate-300 text-white w-9 h-9" >
                        <FaSearch className="w-4 h-4 outline-none"/>
                    </button>
                </form>
            </div>
        </>

    );


}