import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';

const DropDown = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
         // Sign-out successful.
         dispatch(removeUser())
         navigate('/')
       }).catch((error) => {
         // An error happened.
       });
       }
    const userName = useSelector((store)=>store.user.displayName)
  return (
    <div className=' px-6 pb-8 pt-4   bg-black text-gray-300 absolute top-16 opacity-80 right-10 '>
        <h2>Hey, {userName}</h2>
        <h3 className='border-b-[1px] pb-5'>Manage Profiles</h3>
     <ul className="pt-2  text-base">
       <li className=''>Account</li>
       <li className='pt-1'>Help Center</li>
       <li className='cursor-pointer pt-1 hover:text-gray-100' onClick={handleSignOut}>Sign out of Netflix</li>
     </ul>
    </div>
  )
}

export default DropDown;

