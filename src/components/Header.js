import {useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Netflix_Logo} from "../utils/constants";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";


const Header = () => {
  const [scrolled,setScrolled]= useState(false)
  const [toggleIcon,setToggleIcon] = useState('fa-solid fa-caret-down')
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const toggleMenu = ()=>setIsMenuOpen((prev)=>!prev)
  const user = useSelector((store)=>store?.user)

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
    <>
    <div className={`grid grid-cols-[75%,25%] fixed top-0 z-[100] bg-gradient-to-b from-black w-full transition-all ease-in-out duration-700 ${scrolled?"bg-black":"bg-black opacity-60"}` }>
     
    <div className="flex  relative  proTablet:w-screen proTablet:flex proTablet:justify-center">
      

    <img className="w-36 proTablet:w-40 ml-10   
     "   alt="logo"  src={Netflix_Logo}/>
       <ul className="flex items-center text-gray-500  text-sm proTablet:hidden">
        <li className="pl-5 px-4 font-light cursor-pointer hover:text-white">
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
      
    
    
      <div className=" proTablet:hidden  flex justify-end  mr-10">
       
      <div className=" flex justify-end items-center text-gray-300">
      <i className="fa-solid fa-magnifying-glass mr-10 hover:text-white cursor-pointer proTablet:hidden"></i>
      <i className="fa-regular fa-bell mr-10 hover:text-white cursor-pointer proTablet:hidden"></i>
      <img className="w-10 rounded-lg " src={user?.photoURL} alt="uerphoto"/>
        
    <i className={`${toggleIcon} text-gray-300 cursor-pointer mx-2 hover:text-white`} onClick={handleIconToggle}></i>

    </div> 
    {/*DropDown */}
    {toggleIcon === "fa-solid fa-caret-up" && 
    <DropDown/>
}
    </div>
  
    </div>
     {/* Hamburger Menu */}
     <div className="proTablet:block hidden fixed z-[999] ">
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      </div>
    </>
 )
}

export default Header;

