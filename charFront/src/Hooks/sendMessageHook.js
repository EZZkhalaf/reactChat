import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";



const sendMessageHook = () =>{

    const [loading , setLoading] = useState(false);
    const {messages , setMessages , selectedConvo }= useConversation() ;

    const messageFetch = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`api/messages/send/${selectedConvo._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });
    
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
    
            // Use the function form to ensure you're using the latest state
            setMessages((prevMessages) => [...prevMessages, data]);
    
        } catch (err) {
            toast.error(`ninio ${err.message}`);
        } finally {
            setLoading(false);
        }
    }
    
    return {loading , messageFetch};
}

export default sendMessageHook;