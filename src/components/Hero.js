import React from 'react';
import {HERO_CONTENT} from '../constants';
import profilePic from "../assets/kevinRushProfile.png";
import clearCodeIcon from "../assets/icons/cleanCode.png";
import fullStackIcon from "../assets/icons/fullStackExperties.png";
import apiDesignIcon from "../assets/icons/apiDesign.png";
import devopsIcon from "../assets/icons/devops.png"; 
import experianceIcon from "../assets/icons/experiance.png";


const Hero = () => {
  return (
    <div id = 'home' className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full'>
                <div className='flex flex-col items-center'>
                    <h1 className='pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Krushna Sananse</h1>
                    <span className='text-center  bg-gradient-to-r
                         from-pink-300 via-slate-500
                         to-purple-500 bg-clip-text 
                         text-3xl lg:text-4xl tracking-tight text-transparent '>
                        Frontend | Backend | Full Stack Developer
                    </span>
                    <p className='text-center mt-10 min-w-xl py-6 font-light tracking-tighter lg:text-xl text-neutral-500'>
                        {HERO_CONTENT}
                    </p>
                   <div className="flex flex-col items-center justify-center gap-6 pb-10 lg:flex-row lg:items-start">
                    {[
                        {
                        icon: clearCodeIcon,
                        title: 'Clean Code',
                        desc: 'Writing maintainable and scalable solutions',
                        },
                        {
                        icon: fullStackIcon,
                        title: 'Full Stack Expertise',
                        desc: 'Building seamless frontend and robust backend apps',
                        },
                        {
                        icon: apiDesignIcon,
                        title: 'API Design',
                        desc: 'RESTful API architecture with Node.js & SQLite',
                        },
                        {
                        icon: devopsIcon,
                        title: 'DevOps Ready',
                        desc: 'Experience with version control, deployments & cloud basics',
                        },
                        {
                        icon: experianceIcon,
                        title: '2+ Years Experience',
                        desc: 'Hands-on projects with real-world tech stack',
                        },
                    ].map(({ icon, title, desc }, idx) => (
                        <div
                        key={idx}
                        className="p-6 w-full max-w-xs text-center rounded-lg backdrop-blur-sm transition-all duration-300 group transform transition-transform hover:scale-[1.03]"
                        >
                        <img
                            src={icon}
                            alt={title}
                            className="w-12 h-12 mx-auto mb-4 transition-all duration-300 hover:animate-bounceTilt"
                        />

                       <span className="font-semibold text-xl text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:via-slate-500 group-hover:to-purple-500 transition-all duration-300">
                        {title}
                        </span>

                        {/* <span className="font-semibold text-xl group-hover:text-violet-500 transition-colors">
                            {title}
                        </span> */}
                        <p className="text-sm text-gray-300 mt-2">{desc}</p>
                        </div>
                    ))}
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
