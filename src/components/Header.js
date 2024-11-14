import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { Netflix_Logo } from "../utils/constants";

const Header = () => {
  const user = useSelector((store)=>store?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    // This function is checking authentication kindOff EventListner. If a user is signed in then the store is getting updated.
   const unsbscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        // ...
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
        
      }
    });
    //Unsubscribe when the component unmounts
    return ()=> unsbscribe()
  
  },[])

 // const dispatch = useDispatch()
  const handleSignOut = ()=>{
 signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser())
  navigate('/')
}).catch((error) => {
  // An error happened.
});
}

  return (
    
    <div className="flex justify-between absolute z-20   bg-gradient-to-b from-black w-full">
    
    <img className="w-36"   alt="logo"  src={Netflix_Logo}/>

    { user && <div className="flex">
      <img className="w-10" src={user?.photoURL} alt="uerphoto"/>
    <button onClick={handleSignOut} className="bg-red-700 mx-2 p-2 ">Sign Out</button>            
     </div>}

    </div>
 )
}

export default Header;
