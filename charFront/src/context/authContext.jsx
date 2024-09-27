import { createContext, useContext, useState } from "react"; //already in react 


export  const  AuthContext = createContext();


export const useAuthContext = () =>{
    return useContext(AuthContext);

}

export  const AuthContextProvider = ({children}) =>{
    const [auth_user , setAuthUser] = useState(JSON.parse(localStorage.getItem("chatUser")) || null);

    return <AuthContext.Provider value={{auth_user , setAuthUser}}>{children}</AuthContext.Provider>;
};
