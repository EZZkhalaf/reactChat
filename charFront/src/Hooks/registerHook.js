import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import {useAuthContext} from '../context/authContext';

export const registerHook = () => {
    const[loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();


    const reg = async ({fullName,userName,password,Cpassword,gender}) =>{
        const success = handleInputErrors({fullName,userName,password,Cpassword,gender});
        if(!success) return ;




        setLoading(true);
        try{
            const res = await fetch('/api/auth/register',{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({fullName , userName, password ,Cpassword,  gender} )
            });
            
            const data = await res.json();
            if(data.error){
                throw new Error (data.error)
            }


            //when the user refresh after registering we want him to stay signed in , we will use context 
            //local storage in the console 
            localStorage.setItem("chatUser" , JSON.stringify(data));
            setAuthUser(data);



        }catch(err){
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    }
    return {loading , reg};
  
}


function handleInputErrors({fullName,userName,password,Cpassword,gender}){
    
    
    if (!fullName || !userName || !password || !Cpassword || !gender){
        toast.error('please fill the field plsssss');
        return false ;
    }

    if(password !== Cpassword){
        toast.error("the passwords not matching ");
        return false 
    }

    if (password.length <6){
        toast.error("the password has to be more than 6 charecters");
        return false;
    }

    return true;
}
