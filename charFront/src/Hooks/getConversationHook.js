import { useEffect , useState } from "react"
import toast from "react-hot-toast";

const getConversationHook = () =>{
    const [loading , setLoading] = useState(false);
    const [conversations , setConversations] = useState([]);

    useEffect(() =>{
        const getConversation = async() =>{
            setLoading(true);
            try{
                const res = await fetch("/api/users");
                const data = await res.json();
                
                if(data.error){
                    throw new Error (data.error);
                }

                setConversations(data);


            }catch(err){
                toast.error(err.message);
            }finally{
                setLoading(false);
            }

        }
        getConversation();

    },[])//the [] means it runs once 

    return {loading , conversations};

}

export default getConversationHook;