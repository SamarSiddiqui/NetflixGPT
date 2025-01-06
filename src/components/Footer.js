import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-black text-white opacity-90'>
      <div className='w-[85%] m-auto py-10'>
        
        {/* Top Footer Section */}
        <div className='grid grid-cols-[78%,22%] gap-2 py-10 laptop:grid-cols-[65%,35%] smallerTab:block'>
          <div className='smallerTab:text-center'>
            <h1 className='text-2xl font-bold'>About</h1>
            <p className='mt-3 font-light text-gray-200 w-[70%] smallerTab:w-full smallerTab:mb-10'>
              Welcome to Netflix-GPT, where AI meets entertainment! With GPT-powered recommendations, we turn your movie searches into tailored cinematic adventures. Discover films that match your mood, and let technology guide your next binge-worthy story. Your perfect watchlist starts here.
            </p>
          </div>

          {/* Links Section */}
          <div className='flex justify-around w-full'>
            {/* Free Netflix Section */}
            <div>
              <h2 className='whitespace-nowrap font-semibold'>Free Netflix</h2>
              <ul>
                <Link to='/browse' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Home</li>
                </Link>
                <Link to='/movies' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Movies</li>
                </Link>
                <Link to='/tvSeries' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>Web Series</li>
                </Link>
                <Link to='/myList' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>For You</li>
                </Link>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h2 className='whitespace-nowrap font-semibold'>Contact Us</h2>
              <ul>
                <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>
                  <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' target='_blank' rel='noopener noreferrer'>
                    LinkedIn
                  </a>
                </li>
                <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>
                  <a href='mailto:samar.r.siddiqui@gmail.com'>Email</a>
                </li>
                <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>
                  <a href='https://github.com/SamarSiddiqui' target='_blank' rel='noopener noreferrer'>
                    GitHub
                  </a>
                </li>
                <li className='text-gray-400 cursor-pointer hover:text-gray-200 pt-1'>
                  <a href='https://www.instagram.com/samsid__?igsh=MTgxMHpoY3prZzNkMQ==' rel='noreferrer' target='_blank'>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className='border-t-[1px] border-gray-500 grid grid-cols-[70%,30%] pt-5 smallerTab:block smallerTab:text-center smallerTab:pb-0 mb-10'>
          <div className='flex items-center smallerTab:block'>
            <h2>Copyright @ Samar 2025 All Rights Reserved</h2>
          </div>

          {/* Social Media Icons */}
          <div className='flex justify-end items-center text-[clamp(28px,5vw,35px)] smallerTab:mt-5 smallerTab:justify-center'>
            <a href='https://www.instagram.com/samsid__?igsh=MTgxMHpoY3prZzNkMQ==' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-instagram px-6 hover:scale-110 text-gray-100 cursor-pointer'></i>
            </a>
            <a href='https://x.com/samsid__?t=td35lKcr2eFGflbmhChFHw&s=09' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-x-twitter px-6 hover:scale-110 text-gray-100 cursor-pointer'></i>
            </a>
            <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-linkedin px-6 hover:scale-110 text-gray-100 cursor-pointer'></i>
            </a>
            <a href='https://github.com/SamarSiddiqui' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-github pl-6 hover:scale-110 text-gray-100 cursor-pointer'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
