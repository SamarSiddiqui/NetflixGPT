import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';

const DropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const userName = useSelector((store) => store.user.displayName);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, update the store
        dispatch(removeUser());
        navigate('/');
      })
      .catch((error) => {
        // Handle errors (if any)
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="absolute top-16 right-10 px-6 pb-8 pt-4 bg-black text-gray-300/80 opacity-80 cursor-default">
      <h2>Hey, {userName}</h2>
      <h3 className="border-b-[1px] pb-5">Manage Profiles</h3>
      <ul className="pt-2 text-base">
        <li>Account</li>
        <li className="pt-1">Help Center</li>
        <li
          className="cursor-pointer pt-1 hover:text-white"
          onClick={handleSignOut}
        >
          Sign out of Netflix
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
