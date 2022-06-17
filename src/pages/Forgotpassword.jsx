import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { app } from '../firebaseconfig';


export default function Forgotpassword() {
  const [email, setEmail] = React.useState('');
  const [loading] = React.useState(false);
  const auth = getAuth(app);
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
      // nav('/login')
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
// const nav = useNavigate();
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
      <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
      <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
      <p className='text-black text-sm font-medium text-center mt-1.5'>Forgot password</p>

      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email address' className='w-full h-10 rounded-lg border-2 border-black px-3.5 mt-4' />
      <button onClick={sendPasswordReset} className='w-full h-10 rounded-lg bg-black text-white font-bold text-md mt-5'>{!loading && 'Reset Password'}
            {loading && 'Loading...'}</button>
      <p className='text-center mt-5 text-gray-700 font-medium'>Already have an account? <Link to='/login'><span className='font-bold text-black'>Login</span></Link></p>
      </div>
      
    </div>
  )
}
