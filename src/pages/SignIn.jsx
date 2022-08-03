import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArroRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SingIn(){
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div>
            <h1>Explore</h1>
        </div>
    )
}

export default SingIn;