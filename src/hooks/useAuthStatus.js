import { useEffect, useState, useRef} from "react"
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export const useAuthStatus = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) =>{
                if(user){
                    setUserLoggedIn(true);
                }
                setCheckingStatus(false);
            });
        }

        return () => {
            isMounted.current = false;
        }
    }, [isMounted])


    return {userLoggedIn, checkingStatus};
    
}

//https://stackoverflow.com/questions/65505665/protected-route-with-firebase