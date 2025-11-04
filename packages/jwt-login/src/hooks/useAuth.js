import { useState, useEffect } from "react";
import { isLoggedIn, logout} from '../utils/auth';

export function useAuth(){
    const [authenticated, setAuthenticated] = useState(isLoggedIn());

    useEffect(()=>{
        if(!isLoggedIn){
            logout();
            setAuthenticated(false);
        }
    },[]);
    return authenticated;
}