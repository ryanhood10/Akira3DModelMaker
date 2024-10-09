import React from 'react';
import { FaLinkedin, FaFacebook, FaYoutube, FaReddit } from 'react-icons/fa';
// import headerLogo from './images/AkiraLogoNewTransparent.png'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-blue-500">Akira Web Solutions</h2>
          <p className="">Find us on:</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            
          <a
              href="https://www.facebook.com/profile.php?id=61550844571239"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 transition-colors duration-200"
            >
              <FaFacebook size={30} />
            </a> 

            <a
              href="https://www.linkedin.com/company/akira-web-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 transition-colors duration-200"
            >
              <FaLinkedin size={30} />
            </a>
           
            <a
              href="https://www.youtube.com/@AkiraWebSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="  hover:text-blue-500 transition-colors duration-200"
            >
              <FaYoutube size={30} />
            </a>

            <a
              href="https://www.reddit.com/user/Akira_Web_Solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="  hover:text-blue-500 transition-colors duration-200"
            >
              <FaReddit size={30} />
            </a>
          </div>
        </div>
 
        {/* Right Section */}
        <div className="text-center md:text-right">
          <p className="text-sm ">© 2024 <a href="https://www.akirawebsolutions.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 hover:cursor-pointer'>Akira Web Solutions.</a> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
