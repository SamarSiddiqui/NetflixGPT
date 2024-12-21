import { signOut } from 'firebase/auth';
import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const HamburgerMenu = () => {
    const dispatch = useDispatch()
	const navigate = useNavigate()
	const togglerRef = useRef(null)
	
	 const handleSignOut = ()=>{
			signOut(auth).then(() => {
			 // Sign-out successful.
			 dispatch(removeUser())
			 navigate('/')
		   }).catch((error) => {
			console.error('Sign-out error:', error);
		   });
		   }
	const toggleMenu = ()=> {
		if(togglerRef.current){
			togglerRef.current.checked = false
		}
	}	   
  return (
    <div>
      {/* Input ref for toggling menu */}
	  <input ref={togglerRef} type="checkbox" className="toggler"/>
		<div className="hamburger">
			<div></div>
		</div>
		<div className="menu">
			<div>
				<div>
					<ul>
					           
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'><NavLink onClick={toggleMenu}  to={'/browse'}
			>Home</NavLink> </li>		
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'><NavLink onClick={toggleMenu} to={'/movies'} >Movies </NavLink></li>    
			<li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'> <NavLink onClick={toggleMenu} to={'/tvSeries'}> Web Series </NavLink></li>
		    <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'><NavLink onClick={toggleMenu} to={'/myList'} >For You  </NavLink></li>
		    <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'><NavLink onClick={toggleMenu} to={'/gptsearch'}>Gpt-Search</NavLink></li>
     		<li onClick={handleSignOut}>Sign Out</li>

        <div className='flex justify-center items-center text-[clamp(20px,5vw,35px)] smallerTab:mt-5'>
        {/* InstaGram */}
        <a href='https://www.instagram.com/samsid__?igsh=MTgxMHpoY3prZzNkMQ==' target='blank'>
        <i className="fa-brands fa-instagram  px-6  hover:scale-110 text-gray-100 cursor-pointer"></i>
        </a>
        {/* Twitter */}
		<a href='https://x.com/samsid__?t=td35lKcr2eFGflbmhChFHw&s=09' target='blank'>
        <i className="fa-brands fa-x-twitter  px-6 hover:scale-110 text-gray-100 cursor-pointer"></i>
        </a>
        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' target='blank' rel='noopener noreferrer'>        
        <i className="fa-brands fa-linkedin  px-6 hover:scale-110 text-gray-100 cursor-pointer"></i>
        </a>
        {/* GitHub */}
        <a href='https://github.com/SamarSiddiqui' target='blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-github  pl-6  hover:scale-110 text-gray-100 cursor-pointer"></i>
        </a>
        </div>        
					</ul>
				</div>
			</div>
		</div>
	</div>
  )
}

export default HamburgerMenu
