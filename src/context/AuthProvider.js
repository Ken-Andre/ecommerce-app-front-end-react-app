import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [auth, setAuth] = useState({});
    //useEffect(() =>{console.log("le nouveau auth est: ",auth)},[auth])
    return (
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

// export default AuthProvider;
