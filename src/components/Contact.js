import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_SUB_TEXT, ABOUT_TEXT } from '../constants';
import linkIcon from '../assets/icons/linkIconWhite.png';
import mailIcon from '../assets/icons/mailIcon.png';
import callIcon from '../assets/icons/callIcon.png';
import locationIcon from '../assets/icons/locationIcon.png';
import devToIcon from '../assets/icons/devToIcon.png';
import linkedInIcon from "../assets/icons/linkedInIcon.png";
import instagramIcon from "../assets/icons/instagramIcon.png";
import gitIcon from '../assets/icons/gitIcon.png';


const Contact = () => {
  return (
    <div id ="contact" className='border-b border-neutral-900'>
        <div className='flex flex-col text-center items-center my-20'>
            <div className="w-full flex flex-col justify-between items-center gap-6 lg:flex-row lg:items-start">
                <div
                    className="p-6 w-full max-w-xs  rounded-lg  transition-all duration-300 group"
                >
                    <h3 className="text-left font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500/90 to-blue-500/90  transform transition-all duration-300">
                        Krushna Sananse
                    </h3>
                    <p className="text-left text-gray-300 group-hover:text-gray-400  mt-2 transition-all duration-300">
                        Full Stack Developer dedicated to crafting clean, scalable, and user-centric digital experiences. Focused on building meaningful products that solve real-world problems with modern technologies.
                    </p>
                    <div className="flex items-center space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/krushna-sananse/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInIcon} alt="LinkedIn Icon" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                        </a>
                        <a href="https://github.com/KrushnaSananse" target="_blank" rel="noopener noreferrer">
                            <img src={gitIcon} alt="GitHub Icon" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                        </a>
                        <a href="https://www.instagram.com/thecoddingstack/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram Icon" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                        </a>
                    </div>
                </div>
                <div
                    className="p-6 w-full max-w-xs  rounded-lg  transition-all duration-300 group"
                >
                    <h3 className="text-left font-bold text-2xl text-transparent  text-white">
                        Quick Links
                    </h3>
                    <div className="text-left text-gray-300 group-hover:text-gray-400 mt-2 transition-all duration-300 space-y-3">
                        <div className='flex items-center space-x-3'>
                            <a href="#home">
                                <img src={linkIcon} alt="Link Icon" className='w-6 h-6' />
                            </a>
                            <a href="#home" className='hover:underline'>Home</a>
                        </div>
                        
                        <div className='flex items-center space-x-3'>
                            <a href="#about">
                                <img src={linkIcon} alt="Link Icon" className='w-6 h-6' />
                            </a>
                            <a href="#about" className='hover:underline'>About</a>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <a href="#skills">
                                <img src={linkIcon} alt="Link Icon" className='w-6 h-6' />
                            </a>
                            <a href="#skills" className='hover:underline'>Skills & Technologies</a>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <a href="#projects">
                                <img src={linkIcon} alt="Link Icon" className='w-6 h-6' />
                            </a>
                            <a href="#projects" className='hover:underline'>Projects</a>
                        </div>
                    </div>
                </div>

                <div
                    className="p-6 w-full max-w-xs rounded-lg transition-all duration-300 group"
                >
                    <h3 className="text-left font-bold text-2xl text-transparent text-white">
                        Contact
                    </h3>
                    <p className="text-left text-gray-300 group-hover:text-gray-400 mt-2 transition-all duration-300">
                        <div className='flex items-center space-x-3'><img src={mailIcon} alt="Mail Icon" className='w-6 h-6 mr-2' /> <span>krishsananse@gmail.com</span></div><br/>
                        <div className='flex items-center space-x-3'><img src={callIcon} alt="Phone Icon" className='w-6 h-6 mr-2' /> <span>(+91) 9284565974</span></div><br/>
                        <div className='flex items-center space-x-3'><img src={locationIcon} alt="Location Icon" className='w-6 h-6 mr-2' /> <span>Pune, India</span></div><br/>
                        <div className='flex items-center space-x-3'><img src={devToIcon} alt="Dev Icon" className='w-6 h-6 mr-2' /> <span>dev.to/krushna_sananse</span></div><br/>
                    </p>
                </div>
                
            </div>
            <div className="w-full items-center mt-5">
                 <p className='text-gray-400'>&copy; 2025 Krushna Sananse. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
