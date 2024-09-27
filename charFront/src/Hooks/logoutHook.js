import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const logoutHook = () =>{
    const [loading , setLoading] = useState(false );
    const {setAuthUser}= useAuthContext();

    

    const logoutFetch = async() =>{
        setLoading(true);
        
        
        try{
            const res = await fetch('/api/auth/logout' , {
                method:'POST' , 
                headers:{"Content-Type" : "application/json"}
            });
            
            const data = await res.json();
            if (data.error){
                throw new Error (data.error);
            }

            localStorage.removeItem("chatUser");
            setAuthUser(null);

            toast.success("log out success");

        }catch(err){
                toast.error(err.message);
        }finally{
            setLoading(false);
        }
    };
    return {loading , logoutFetch};
} ;

export default logoutHook;