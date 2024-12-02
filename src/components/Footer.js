import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
   
  const user = useSelector((state)=>state.user)
  // console.log(user);
  
  // const [isActive, setIsActive] = useState(true)
  // if(user===null){
  //   setIsActive(false)
  //   console.log(isActive);
  // } else{
  //   setIsActive(true)
  // }
 
  return (
    <footer className='bg-black text-white opacity-90'>
     <div className=' w-[97%] m-auto  py-10'>

      {/*topFooter */}
      <div className='flex justify-around py-10   '>
        <div>
          <h1 className=' text-lg font-bold'>About</h1>
          <p className='mt-3 font-light text-gray-300 w-1/2'>loremdkdkmwdmwmwmmwdw  wkwihsoqdo wndjwnin kwnddineijbfue ndied9e i i2dihd  2wdn2nddwjd e ibejdejn ijj djibdd d djdbu8ooosid  wdnj</p>
        </div>
        <div className=''>
          <h2 className='whitespace-nowrap font-semibold pr-10'>Free Netflix</h2>
          <ul className=''>
            <Link  to={'/browse'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>            
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Home</li>
            </Link>

            <Link to={'/movies'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Movies</li>
            </Link>

            <Link to={'/tvSeries'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>            
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Web Series</li>
            </Link>

            <Link to={'/myList'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>For You</li>
            
            </Link>
          </ul>
        </div>
        <div className=' '>
          <h2  className=' whitespace-nowrap font-semibold'>Contact Us</h2>
          <ul className=''>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>
              <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' target='blank' rel='noopener noreferrer'>
              LinkedIn
              </a>
              </li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>
            <a href='mailto:samar.r.siddiqui@gmail.com'>
              Email
              </a>
            </li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>
            <a href='https://github.com/SamarSiddiqui' target='blank' rel='noopener noreferrer'>
            Github
              </a>
            </li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Instagram</li>
          </ul>
        </div>
      </div>

      {/*belowFooter */}
      <div className='border-t-[1px] border-gray-500 w-[94%] m-auto flex justify-between pb-16 pt-5'>
        <div className=''>
          <h2>Copyright @ Samar 2024 All Rights Reserved</h2>
        </div>
        
        <div>
        {/* InstaGram */}
        <i className="fa-brands fa-instagram text-4xl px-6  hover:scale-110 text-gray-100 cursor-pointer"></i>

        {/* Twitter */}
        <i className="fa-brands fa-x-twitter text-4xl px-6 hover:scale-110 text-gray-100 cursor-pointer"></i>
          {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' target='blank' rel='noopener noreferrer'>        
        <i className="fa-brands fa-linkedin text-4xl px-6 hover:scale-110 text-gray-100 cursor-pointer"></i>
        </a>
        {/* GitHub */}
        <a href='https://github.com/SamarSiddiqui' target='blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-github text-4xl px-6  hover:scale-110 text-gray-100 cursor-pointer"></i>
        </a>
        </div>
     </div>
      </div>
    </footer>
  )
}

export default Footer;
