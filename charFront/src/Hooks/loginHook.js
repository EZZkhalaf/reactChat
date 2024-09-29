import { useState } from "react"
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const loginHook = () =>{
    const [loading , setLoading] = useState(false) ; 
     const {setAuthUser} =  useAuthContext();

     
     const loginFetch = async (userName , password) =>{
         setLoading(true);
        
         const success = handleInputErrors({userName , password});
        if(!success){
            setLoading(false);
            return;
        }

        try{
            const res = await fetch('/api/auth/login' , {
                method : 'POST' , 
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({userName , password})
            });

            const data = await res.json();
            if(data.error){
                throw new Error (data.error);
            }
           

            localStorage.setItem("chatUser" , JSON.stringify(data));
            
            setAuthUser(data);

        }catch(err){
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    

    }
    return {loading , loginFetch};
}

export default loginHook;


function handleInputErrors({userName,password}){
    
    
    if (!userName || !password ){
        toast.error('please fill the field plsssss');
        return false ;
    }

    

    if (password.length <6){
        toast.error("the password has to be more than 6 charecters");
        return false;
    }

    return true;
}