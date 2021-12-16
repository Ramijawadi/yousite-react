import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({ toggle }) => {
    return (
    
<nav className=' flex justify-between items-center h-6 bg-white text-black relative shadow-sm font-mono'
role='navigation'
>
  
  <Link to ='/' className=' z-30 leading-3 tracking-normal	 italic font-sans	 text-4xl text-blue-500 mt-10 pl-8'>
  <span className=' z-50 leading-3 tracking-normal italic font-sans	 font-extrabold text-blue-500 mt-10 pl-8'>YOUR</span >SITE
  </Link>

  <div className='px-4 cursor-pointer md:hidden'
  
  onClick={toggle}>
  <svg class="w-6 h-6" fill="none" 
  stroke="currentColor" viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" 
    stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </div>

    <div className='pr-8  mt-10 md:block hidden relative  rotate'>
    <div className='bg'></div>
    <Link className='p-4 rotate hover:bg-blue-500 rounded-xl	 ... ' to='/'>Home</Link>
    <Link className='p-4 hover:bg-blue-500 rounded-xl'  to='/menu'>Menu</Link>
    <Link className='p-4 hover:bg-blue-500 rounded-xl' to='/about'>About</Link>
    <Link className='p-4 hover:bg-blue-500 rounded-xl' to='/contact'>Contact</Link>
    </div>
</nav>


    );
};

export default Navbar
