import React from 'react'

const Footer = () => {
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
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Home</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Movies</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Web Series</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>For You</li>
          </ul>
        </div>
        <div className=' '>
          <h2  className=' whitespace-nowrap font-semibold'>Contact Us</h2>
          <ul className=''>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>LinkedIn</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Email</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Github</li>
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
        <i className="fa-brands fa-instagram text-4xl px-6  hover:scale-110 text-gray-100 cursor-pointer"></i>
        <i className="fa-brands fa-x-twitter text-4xl px-6 hover:scale-110 text-gray-100 cursor-pointer"></i>
        <i className="fa-brands fa-linkedin text-4xl px-6 hover:scale-110 text-gray-100 cursor-pointer"></i>
        <i className="fa-brands fa-github text-4xl px-6  hover:scale-110 text-gray-100 cursor-pointer"></i>
        </div>
     </div>
      </div>
    </footer>
  )
}

export default Footer;
