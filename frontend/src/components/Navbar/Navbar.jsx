import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Collection from '../../pages/Collection';
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-6 sm:px-24  w-[100%] h-[80px] bg-deepForest'>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d8f7b] via-[#A0C49D] to-[#E7EFC7] font-extrabold text-2xl">
          TrEndDOra
        </span>

        {/* Links */}
        <ul className="hidden sm:flex gap-10 text-sm text-white absolute left-[65%] -translate-x-[40%]">
          <NavLink to={"/"} className="flex flex-col items-center text-white">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white' />
          </NavLink>
          <NavLink to={"/collection"} className="flex flex-col items-center text-white">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white' />
          </NavLink>
          <NavLink to={"/about"} className="flex flex-col items-center text-white">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white' />
          </NavLink>
          <NavLink to={"/contact"} className="flex flex-col items-center text-white">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white' />
          </NavLink>
        </ul>

      </div>
    </div>
  )
}

export default Navbar