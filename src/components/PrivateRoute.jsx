import { Navigate, Outlet} from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./spinner"

const PrivateRoute = () => {
    const {userLoggedIn, checkingStatus} = useAuthStatus()

    if(checkingStatus){
        return <Spinner/>
    }

    return userLoggedIn ? <Outlet/> :<Navigate to='/sign-in'/>
}

export default PrivateRoute