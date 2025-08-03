import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_SUB_TEXT, ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div id='about' className='border-b border-neutral-900'>
        <div className='flex flex-col text-center items-center my-20'>
            <div className='inline-flex items-center rounded-full border border-violet-500/10 bg-violet-500/5 px-4 py-1.5 mb-6 hover:border-violet-500/20 hover:bg-violet-500/10 transition-all duration-300'>
                <h1 className='text-center text-xl'>About
                    <span className='text-neutral-500'> Me</span>
                </h1>
                {/* <span class="ml-2 h-4 w-4 rounded-full bg-white animate-pulse"></span> */}
                <span class="ml-2 h-4 w-4 rounded-full animate-pulse bg-gradient-to-r from-violet-500/90 via-blue-500/90 to-teal-500/90"></span>

            </div>
            <h1 class="text-4xl lg:text-6xl md:text-5xl font-bold tracking-tight my-6">Passionate about
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-500/90 via-blue-500/90 to-teal-500/90 hover:from-violet-500 hover:via-blue-500 hover:to-teal-500 transition-all duration-300"> creating</span> <br/>
                digital experiences
            </h1>
            <p className='min-w-xl py-6 font-light tracking-tighter text-xl text-neutral-500'>
                {ABOUT_SUB_TEXT}
            </p>
            <div className="w-full flex flex-col justify-between items-center gap-6 pt-10 lg:flex-row lg:items-start">
                {[
                    {
                    title: '2+',
                    desc: 'Years of experience',
                    },
                    {
                    title: '5+',
                    desc: 'Projects Completed',
                    },
                    {
                    title: '3+',
                    desc: 'Collaborations with Cross-functional Teams',
                    },
                    {
                    title: '99%',
                    desc: 'Success Rate',
                    },
                ].map(({title, desc }, idx) => (
                    <div
                        key={idx}
                        className="p-6 w-full max-w-xs  rounded-lg backdrop-blur-sm transition-all duration-300 text-center group"
                    >
                        <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500/90 to-blue-500/90 group-hover:scale-110 transform transition-all duration-300">
                            {title}
                        </h3>
                        <p className="text-gray-300 group-hover:text-gray-400 blur-[0.25px] group-hover:blur-0 mt-2 transition-all duration-300">
                            {desc}
                        </p>


                    </div>
                    // <div class="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 text-center group">
                    //     <h3 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500/90 to-blue-500/90 group-hover:scale-110 transition-all duration-300">1+</h3>
                    //     <p class="text-muted-foreground/80 group-hover:text-muted-foreground mt-2 transition-colors duration-300">Years Experience</p>
                    // </div>
                ))}
                </div>
        </div>
    </div>
  )
}

export default About
