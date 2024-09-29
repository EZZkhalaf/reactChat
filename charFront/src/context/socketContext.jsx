import { createContext , useState , useEffect, Children, useContext } from "react";
import { useAuthContext } from "./authContext";
import io from 'socket.io-client';

 const SocketContext = createContext();

export const useSocketContext =() =>{
    return useContext(SocketContext);
}


export const SocketContextProvider = ({children}) =>{
    const [socket,setSocket] = useState(null);
    const [onlineUsers , setOnlineUsers] = useState([]);
    const {auth_user} = useAuthContext();



    useEffect(()=>{
        if(auth_user){
            const socket = io("http://localhost:3000",{

                query : {
                    userId : auth_user._id
                }

            });
            setSocket(socket);

            //to listen to events both in client and server side 
            socket.on("getOnlineUsers" , (users)=>{

                setOnlineUsers(users);
            
            })


            return ()=>socket.close();
        
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[auth_user]);

    return <SocketContext.Provider value={{socket,onlineUsers}}>{children} </SocketContext.Provider>;
}