import {React,useState} from 'react'
import logo from '../assets/kevinRushLogo.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
// import {FaSquareXTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className = 'flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center text-4xl'>
            KS
        </div>
        {/* <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        </div> */}
        {/* Hamburger menu for mobile */}
        <div className="md:hidden lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex lg:flex items-center gap-6 text-lg">
          <NavItem label="Home" link="#home" />
          <NavItem label="About" link="#about" />
          <NavItem label="Skills & Technologies" link="#skills" />
          <NavItem label="Projects" link="#projects" />
          <NavItem label="Contact" link="#contact" />
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full border border-violet-900 bg-violet-900 my-4 px-4 py-1.5 mb-6 hover:border-violet-800 hover:bg-violet-800 transition-all duration-300 text-white flex flex-col items-center gap-4 py-6 md:hidden lg:hidden z-50">
            <NavItem label="Home" link="#home" />
            <NavItem label="About" link="#about" />
            <NavItem label="Skills & Technologies" link="#skills" />
            <NavItem label="Projects" link="#projects" />
            <NavItem label="Contact" link="#contact" />
          </div>
        )}

        {/* <div className='m-8 flex items-center justify-center gap-4 text-xl'>
           <div>
              <img></img>
              <span>Home</span>
            </div>
            <div>
              <img></img>
              <span>About</span>
            </div>
            <div>
              <img></img>
              <span>Skills & Technologies</span>
            </div>
            <div>
              <img></img>
              <span>Projects</span>
            </div>
            <div>
              <img></img>
              <span>Contact</span>
            </div>
        </div> */}
    </nav>
  )
}

function NavItem({ label, link }) {
  return (
    <a href={link} className="hover:text-violet-400 transition-colors text-neutral-500">
      {label}
    </a>
  );
}

export default Navbar
