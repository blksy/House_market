import {useLocation, useNavigate} from 'react-router-dom'
import {getAuth, sighInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {doc, setDoc, getDoc} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

function OAuth() {
   const navigate = useNavigate()
   const location = useLocation()

   const onGoogleClick = async () =>{
      try{
         const auth = getAuth()
         const provider = new GoogleAuthProvider()
         const result = await sighInWithPopup(auth, provider)
         const user = result.user

         
      }catch(error){

      }
   }

   return <div className='socialLogin'>
   <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'}
   with</p>
    <button className='socialIconDiv' onClick={onGoogleClick}>
      <img className='socialIconImg' src={googleIcon} alt="google"/>
    </button>
   </div>
}

export default OAuth;