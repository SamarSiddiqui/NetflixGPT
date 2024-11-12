import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store)=>store?.user)
  // console.log(user);
  
  const navigate = useNavigate()

 // const dispatch = useDispatch()
  const handleSignOut = ()=>{
 signOut(auth).then(() => {
  // Sign-out successful.
  // dispatch(removeUser())
  navigate('/')
}).catch((error) => {
  // An error happened.
});
  }

  return (
    
    <div className="flex justify-between absolute z-10   bg-gradient-to-b from-black w-screen">
    
    <img className="w-36"   alt="logo"  src= "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>

    { user && <div className="flex">
      <img className="w-10" src={user?.photoURL} alt="uerphoto"/>
    <button onClick={handleSignOut} className="bg-red-700 m-2 p-2 ">Sign Out</button>            
     </div>}

    </div>
 )
}

export default Header;
