import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Netflix_Logo, Supported_Lang } from "../utils/constants";
import { changeLanguage } from "../utils/configlangSlice";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [scrolled,setScrolled]= useState(false)
  const [toggleIcon,setToggleIcon] = useState('fa-solid fa-caret-down')
  const user = useSelector((store)=>store?.user)

  const showLangOptions = useSelector((store)=>store?.gpt?.toggleGpt)
  
  const dispatch = useDispatch()
   


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
    
    <div className={` flex justify-between fixed top-0 z-[999] bg-gradient-to-b from-black w-full transition-all ease-in-out duration-700 ${scrolled?"bg-black":"bg-black opacity-70"}` }>
     
    <div className=" flex ">
    <img className="w-36 ml-10 "   alt="logo"  src={Netflix_Logo}/>
       <ul className="flex items-center text-gray-500  text-sm  ">
        <li className="pl-5 px-4 font-light cursor-pointer">
        <NavLink to={'/browse'} >Home</NavLink>
        </li>
        <li className="pl-5 px-4  font-light cursor-pointer hover:text-white">
          <NavLink to={'/tvSeries'}>Tv Series</NavLink>
        </li>
        <li className="pl-5 px-4 font-light cursor-pointer hover:text-white">
        <NavLink to={'/movies'}>Movies</NavLink>
        </li>
        <li className="pl-5 px-4 font-light cursor-pointer hover:text-white"><NavLink to={'/trending'}>Trending</NavLink></li>
        <li className="pl-5 px-4 font-light cursor-pointer hover:text-white"><NavLink to={'/myList'}>My List</NavLink></li>
       
        <li className="pl-5 px-4 font-light cursor-pointer hover:text-white"><NavLink to={'/gptsearch'}>Gpt Search<i className="fa-solid fa-wand-magic-sparkles pl-2"></i></NavLink></li>
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
    
        <div className="  flex justify-end w-60 mx-10">
        {/* <button className="animate-pulse-glow relative px-2 py-2  font-medium text-gray-300 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-600/40 hover:scale-105 before:absolute before:inset-0 before:bg-gray-900 before:blur-md before:opacity-0 hover:before:opacity-10 before:rounded-lg hover:text-yellow-400" onClick={handleGptToggle}>{showLangOptions?"HomePage":"Gpt Search"}
        <i className="fa-solid fa-wand-magic-sparkles pl-2"></i></button> */}
      <div className=" flex justify-end items-center ">
      
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

