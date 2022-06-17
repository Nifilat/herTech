import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLinkedIn } from 'react-linkedin-login-oauth2';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import pic from '../images/Group 1.png'

// firebase 
import {app} from '../firebaseconfig'

// import { signInWithGoogle } from '../firebaseconfig'


import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export default function Signin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loading, setLoading] = React.useState(false);
 

  const [passwordSwitch, setPasswordSwitch] = React.useState(false)


  const signin = async () => {
    try {
    setLoading(true); 
    const authentication = getAuth();
    const details = await createUserWithEmailAndPassword(authentication, email, password);
    nav('/')
    console.log(details.user);
    setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      nav('/')
    })
    .catch((error) => {
      console.log(error);
    });
};


  const {linkedInLogin}  = useLinkedIn({
    clientId: '86df6ewln0l3vt',
    redirectUri: 'http://localhost:3000', 
    // URLENCODE(redirectUri) : https%3A%2F%2Fsymphonious-kringle-53d6c6.netlify.app
    onSuccess: (code) => {
      console.log(code);
      
    },
    onError: (error) => {
      console.log(error);
    },
  });





  const nav = useNavigate();

  

  

  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
    <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
      <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
      <p className='text-black text-sm font-medium text-center mt-1.5'>You're 1-click away from creating an account</p>

      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email address' className='w-full h-10 rounded-lg border-2 border-gray-300 px-3.5 mt-4' />
      <div className='relative'>
      <input type={passwordSwitch ? "text" : "password"} value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='password'  className='w-full h-10 rounded-lg border-2 border-gray-300 px-3.5 mt-4'  />
      <span className='absolute text-right right-4 bottom-0 font-medium text-xs left-8 top-6 text-gray-400 cursor-pointer' onClick={() => setPasswordSwitch(!passwordSwitch)}>Show</span> 

      </div>
      

      <button onClick={signin} className='w-full h-10 rounded-lg bg-black text-white font-bold text-md mt-5'> {!loading && 'Create account'}
            {loading && 'Loading...'}
            </button>
      <p className=' text-center mt-4 font-medium text-base text-gray-600'>OR</p>
      
      <button onClick={signInWithGoogle}  className='w-full h-10 rounded-lg bg-gray-300 text-black font-normal text-base mt-4 flex justify-center items-center gap-1'><img src= {pic} alt="Google" className='w-4'/><span>Continue with Google</span></button>
      <button onClick={linkedInLogin} className='w-full h-10 rounded-lg bg-gray-300 text-black font-normal text-base mt-4'><FontAwesomeIcon icon={faLinkedin}  className = "text-[#2D6EAE]"></FontAwesomeIcon> Continue with LinkedIn</button>
      <p className='text-center mt-4 text-gray-700 font-medium'>Already have an account? <Link to='/login'><span className='font-bold text-black'>Login</span></Link></p>
    </div>
    </div>
  )
}
