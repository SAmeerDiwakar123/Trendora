import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import search1 from '../../assets/search1.png'
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'
import cart from "../../assets/cart.png"
import menu from "../../assets/menu.png"
import left from "../../assets/left.png"

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full bg-deepForest via-gray-900 text-white shadow-lg border-b border-gray-700">
      <div className="flex justify-between items-center px-6 sm:px-24 h-[80px] relative">

        {/* Logo */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d8f7b] via-[#A0C49D] to-[#E7EFC7] font-extrabold text-xl sm:text-3xl tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer drop-shadow-lg">
          TrEndDOra
        </span>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-12 text-sm absolute left-1/2 -translate-x-1/2">
          <NavLink 
            to="/" 
            className="flex flex-col items-center group relative py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            <p className="font-medium tracking-wider group-hover:text-[#A0C49D] transition-colors duration-300">HOME</p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-[#6d8f7b] to-[#A0C49D] transition-all duration-300 mt-1" />
          </NavLink>
          <NavLink 
            to="/collection" 
            className="flex flex-col items-center group relative py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            <p className="font-medium tracking-wider group-hover:text-[#A0C49D] transition-colors duration-300">COLLECTION</p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-[#6d8f7b] to-[#A0C49D] transition-all duration-300 mt-1" />
          </NavLink>
          <NavLink 
            to="/about" 
            className="flex flex-col items-center group relative py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            <p className="font-medium tracking-wider group-hover:text-[#A0C49D] transition-colors duration-300">ABOUT</p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-[#6d8f7b] to-[#A0C49D] transition-all duration-300 mt-1" />
          </NavLink>
          <NavLink 
            to="/contact" 
            className="flex flex-col items-center group relative py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            <p className="font-medium tracking-wider group-hover:text-[#A0C49D] transition-colors duration-300">CONTACT</p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-[#6d8f7b] to-[#A0C49D] transition-all duration-300 mt-1" />
          </NavLink>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3 sm:gap-8">
          <div className="p-1 sm:p-2 rounded-full hover:bg-white/10 transition-all duration-300 group">
            <img src={search1} className="w-6 sm:w-6 cursor-pointer group-hover:scale-110 transition-transform duration-300" alt="search" />
          </div>

          <div className="relative group">
            <div className="p-1 sm:p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <img src={user} className="w-6 sm:w-6 cursor-pointer group-hover:scale-110 transition-transform duration-300" alt="user" />
            </div>
            {/* Enhanced Dropdown */}
            <div className="absolute right-0 top-10 sm:top-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="w-40 py-3 px-2 bg-white/95 backdrop-blur-sm text-gray-700 rounded-xl shadow-2xl border border-white/20">
                <div className="absolute -top-2 right-4 w-4 h-4 bg-white/95 transform rotate-45 border-l border-t border-white/20"></div>
                <p className="cursor-pointer hover:text-[#6d8f7b] hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium">My Profile</p>
                <p className="cursor-pointer hover:text-[#6d8f7b] hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium">Orders</p>
                <p className="cursor-pointer hover:text-red-500 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative p-1 sm:p-2 rounded-full hover:bg-white/10 transition-all duration-300 group">
            <img src={cart} className='w-5 sm:w-5 min-w-5 sm:min-w-5 group-hover:scale-110 transition-transform duration-300' alt="" />
            <div className='absolute -right-1 -top-1 w-5 h-5 sm:w-6 sm:h-6 text-center leading-5 sm:leading-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-full text-[10px] sm:text-xs shadow-lg animate-pulse'>
              10
            </div>
          </Link>
          
          <div className="p-1 sm:p-2 rounded-full hover:bg-white/10 transition-all duration-300 sm:hidden">
            <img onClick={() => setVisible(true)} src={menu} className='w-8 cursor-pointer hover:scale-110 transition-transform duration-300' alt="" />
          </div>
        </div>

        {/* Enhanced Sidebar menu for small screens */}
        <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-gradient-to-b from-white to-gray-50 backdrop-blur-lg transition-all duration-500 ease-in-out z-50 ${visible ? 'w-full sm:w-80' : 'w-0'} shadow-2xl`}>
          <div className={`flex flex-col text-gray-600 h-full transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-6 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors duration-200'>
              <div className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                <img src={left} className='h-4 rotate-180' alt="" />
              </div>
              <p className="font-semibold text-lg">Back</p>
            </div>
            <div className="flex-1 py-4">
              <NavLink 
                className='block py-4 pl-8 pr-6 border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#6d8f7b]/10 hover:to-transparent hover:text-[#6d8f7b] transition-all duration-300 font-medium text-lg' 
                to={'/'} 
                onClick={() => setVisible(false)}
              >
                Home
              </NavLink>
              <NavLink 
                className='block py-4 pl-8 pr-6 border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#6d8f7b]/10 hover:to-transparent hover:text-[#6d8f7b] transition-all duration-300 font-medium text-lg' 
                to='/collection'
                onClick={() => setVisible(false)}
              >
                Collection
              </NavLink>
              <NavLink 
                className='block py-4 pl-8 pr-6 border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#6d8f7b]/10 hover:to-transparent hover:text-[#6d8f7b] transition-all duration-300 font-medium text-lg' 
                to='/about'
                onClick={() => setVisible(false)}
              >
                About
              </NavLink>  
              <NavLink 
                className='block py-4 pl-8 pr-6 border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#6d8f7b]/10 hover:to-transparent hover:text-[#6d8f7b] transition-all duration-300 font-medium text-lg' 
                to={'/contact'}
                onClick={() => setVisible(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        {/* Backdrop overlay */}
        {visible && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setVisible(false)}
          ></div>
        )}
      </div>
    </div>
  )
}

export default Navbar
