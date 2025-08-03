import React from 'react';
import {RiReactjsLine} from 'react-icons/ri';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiMongodb} from 'react-icons/si';
import {DiRedis} from 'react-icons/di';
import {FaNodeJs} from 'react-icons/fa';
import {BiLogoPostgresql} from 'react-icons/bi';
import cssIcon from '../assets/icons/css.png';
import dockerIcon from '../assets/icons/docker.png';
import gitIcon from '../assets/icons/git.png';
import htmlIcon from '../assets/icons/html.png';
import javaIcon from '../assets/icons/java.png';
import javascriptIcon from '../assets/icons/javascript.png';
import mongoIcon from '../assets/icons/mongo.png';
import mySQLIcon from '../assets/icons/mysql.png';
import nodeIcon from '../assets/icons/node.png';
import phpIcon from '../assets/icons/php.png';
import reactIcon from '../assets/icons/react.png';
import reduxIcon from '../assets/icons/redux.png';

const Technologies = () => {
  return (
    <div id='skills' className="border-b border-neutral-800">
        <div className='flex flex-col text-center items-center my-20'>
        
            <div className='inline-flex items-center rounded-full border border-violet-500/10 bg-violet-500/5 px-4 py-1.5 mb-6 hover:border-violet-500/20 hover:bg-violet-500/10 transition-all duration-300'>
                <h1 className='text-center text-xl'>Skills
                    <span className='text-neutral-500 mx-1'>&</span>
                </h1>
                Technologies
                {/* <span class="ml-2 h-4 w-4 rounded-full bg-white animate-pulse"></span> */}
                <span class="ml-2 h-4 w-4 rounded-full animate-pulse bg-gradient-to-r from-violet-500/90 via-blue-500/90 to-teal-500/90"></span>

            </div>
            <h1 class="text-3xl lg:text-5xl md:text-4xl font-bold tracking-tight my-6">Bringing digital 
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-500/90 via-blue-500/90 to-teal-500/90 hover:from-violet-500 hover:via-blue-500 hover:to-teal-500 transition-all duration-300"> solutions to life</span> <br/>
                with modern technologies
            </h1>
            <p className='min-w-xl py-6 font-light tracking-tighter text-xl text-neutral-500'>
                Each line of code is a step toward creating intuitive and impactful solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full my-10">
                {/* Frontend Development */}
                <div className="flex flex-col p-6 border-2 border-gray-800 text-white rounded-2xl shadow-md min-h-[300px] transition duration-300 hover:border-1 hover:border-cyan-900 hover:shadow-[0_0_32px_4px_rgba(0,212,255,0.15)] hover:scale-105">
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-bold mb-2 text-white">Frontend Development</h3>
                        <p className="text-xl text-gray-400">
                            Building responsive and interactive user interfaces
                        </p>
                    </div>
                    <div className="space-y-4 text-left">
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={reactIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='flex  text-gray-300 font-medium text-xl'>
                                ReactJS
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={reduxIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                Redux
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={javascriptIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                JavaScript
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={htmlIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                HTML5
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={cssIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                CSS3
                            </span>
                        </div>
                    </div>
                </div>

                {/* Backend Development */}
                <div className="flex flex-col p-6 border-2 border-gray-800 text-white rounded-2xl shadow-md min-h-[300px] transition duration-300 hover:border-1 hover:border-cyan-900 hover:shadow-[0_0_32px_4px_rgba(0,212,255,0.15)] hover:scale-105">
                    <div className="text-center mb-4">
                        <h3 className="text-3xl font-bold mb-2 text-white">Backend Development</h3>
                        <p className="text-xl text-gray-400">
                            Creating robust server-side applications and APIs
                        </p>
                    </div>
                    <div className="space-y-4 text-left">
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={nodeIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                NodeJS
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={javaIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                Java
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={phpIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                PHP
                            </span>
                        </div>
                    </div>
                </div>

                {/* Database & Tools */}
                <div className="flex flex-col p-6 border-2 border-gray-800 text-white rounded-2xl shadow-md min-h-[300px] transition duration-300 hover:border-1 hover:border-cyan-900 hover:shadow-[0_0_32px_4px_rgba(0,212,255,0.15)] hover:scale-105">
                    <div className="text-center mb-4">
                        <h3 className="text-3xl font-bold mb-2 text-white">Database & Tools</h3>
                        <p className="text-xl text-gray-400">
                            Working with databases and development tools
                        </p>
                    </div>
                    <div className="space-y-4 text-left">
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={mySQLIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                MySQL
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={mongoIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                MongoDB
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={gitIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                Git
                            </span>
                        </div>
                        <div className='flex items-center space-x-3 group hower:bg-gray-800/50 p-2 rounded-lg transition-colors transform-none opacity-1'>
                            <img src={dockerIcon} alt="ReactJS" className='w-6 h-6 mr-2' />
                            <span className='text-gray-300 font-medium text-xl'>
                                Docker
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Technologies
