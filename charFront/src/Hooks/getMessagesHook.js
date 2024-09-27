import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";


const getMessagesHook = () =>{
    const [loading , setLoading] = useState(false);
    const {messages , setMessages ,selectedConvo} = useConversation();


    useEffect(() => {
        const getMessages = async() =>{
            setLoading(true);
            try{
                const res = await fetch(`/api/messages/${selectedConvo._id}`);
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                

                 // Ensure the response is an array
                 if (Array.isArray(data)) {
                     setMessages(data);
                 } else {
                     throw new Error("Messages should be an array");
                 }
            }catch(err){
                toast.error(err.message);
            }finally{
                setLoading(false)
            }
        }
        if(selectedConvo?._id) getMessages();

    },[selectedConvo?._id,setMessages])

    return {messages , loading}
}

export default getMessagesHook;