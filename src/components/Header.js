import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { Netflix_Logo, Supported_Lang } from "../utils/constants";
import { toggleGptComponent } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configlangSlice";
import DropDown from "./DropDown";


const Header = () => {
  const [scrolled,setScrolled]= useState(false)
  const [toggleIcon,setToggleIcon] = useState('fa-solid fa-caret-down')
  const user = useSelector((store)=>store?.user)

  const showLangOptions = useSelector((store)=>store?.gpt?.toggleGpt)
  
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


 let handleGptToggle = ()=> {
  dispatch(toggleGptComponent())
 }

 let handleLangchange = (e)=> {
 dispatch(changeLanguage(e.target.value))
 }

 
 useEffect(()=>{
  const handleHeaderScroll = ()=> {
    setScrolled(window.scrollY>50)
  }

  window.addEventListener("scroll",handleHeaderScroll)

  return ()=> window.removeEventListener('scroll',handleHeaderScroll)
 },[])

  const handleIconToggle = ()=> {
    setToggleIcon((prevIcon)=>
      prevIcon === "fa-solid fa-caret-down"
      ? "fa-solid fa-caret-up"
      : "fa-solid fa-caret-down"
    )
}

  return (
    
    <div className={` flex justify-between fixed top-0 z-50 bg-gradient-to-b from-black w-full transition-all ease-in-out duration-700 ${scrolled?"bg-black":"bg-black opacity-70"}` }>
     
    <div className=" flex text-white ">
    <img className="w-36 ml-10 "   alt="logo"  src={Netflix_Logo}/>
       <ul className="flex items-center">
        <li className="pl-5 px-4 font-light text-sm cursor-pointer ">Home</li>
        <li className="pl-5 px-4 text-gray-300 font-light text-sm cursor-pointer hover:text-white">Tv Shows</li>
        <li className="pl-5 px-4 text-gray-300 font-light text-sm cursor-pointer hover:text-white">Moives</li>
        <li className="pl-5 px-4 text-gray-300 font-light text-sm cursor-pointer hover:text-white">Trending</li>
        <li className="pl-5 px-4 text-gray-300 font-light text-sm cursor-pointer hover:text-white">My List</li>
        <li className="pl-5 px-4 text-gray-300 font-light text-sm cursor-pointer hover:text-white">My List</li>
        <li className="pl-5 px-4 text-gray-300 font-light text-sm cursor-pointer hover:text-white">Must Watch</li>
       </ul>
      </div>
    { user && <div className="flex items-center justify-center">
       { showLangOptions && 
          
        <select onChange={handleLangchange}  name="english" className="bg-gray-300 p-2 rounded-md">
          
          { 
            Supported_Lang.map((eachLang)=><option key={eachLang.identifier} value={eachLang.identifier}>{eachLang.name}</option>
            )
          }
       </select>
       }
     
     </div>} 
    
        <div className="flex items-center justify-evenly  w-60 mx-10">
        <button className="animate-pulse-glow relative px-2 py-2  font-medium text-gray-300 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-600/40 hover:scale-105 before:absolute before:inset-0 before:bg-gray-900 before:blur-md before:opacity-0 hover:before:opacity-10 before:rounded-lg hover:text-yellow-400" onClick={handleGptToggle}>{showLangOptions?"HomePage":"Gpt Search"}
        <i className="fa-solid fa-wand-magic-sparkles pl-2"></i></button>
      <div className=" flex justify-center items-center ">
      
      <img className="w-10 rounded-lg" src={user?.photoURL} alt="uerphoto"/>
    {/* <button onClick={handleSignOut} className="bg-red-700 mx-2 p-2 ">Sign Out</button>   */}
     
    <i className={`${toggleIcon} text-gray-300 cursor-pointer mx-2 hover:text-white`} onClick={handleIconToggle}></i>

    </div> 
    {/*DropDown */}
    {toggleIcon === "fa-solid fa-caret-up" && 
    <DropDown/>
}
    </div>
       
          


    </div>
 )
}

export default Header;

