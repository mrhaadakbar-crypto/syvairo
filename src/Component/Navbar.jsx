import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    

    <div className="flex justify-around">
        <div className="bg-[#20063B] flex w-[700px] mt-7 p-1  rounded-full ">
        <Link to='/'> <img className='h-10 ml-14' src="./SYVAIRO_logo.png" alt="SYVAIRO LOGO" /> </Link> 
 
    <ul className='flex mt-2 gap-5 ml-10 text-white' >

      <Link to='/'>
        <li>Home</li>
      </Link>

      <Link to='/services'>
        <li>Services</li>
        </Link>
        
        <Link to='/blog'>
        <li>Media</li>
        </Link>

      <Link to='/about'>
        <li>About</li>
      </Link>  

      <Link to='/careers'>
        <li>Careers</li>
      </Link>
      <Link to='/contact'>
        <li>Contact</li>
    </Link>
    </ul>
    
    </div>
    </div>


<button className=''>
  <img className='bg-[#139DBB] hover:shadow-[0-3px_5px_#00eaff] text-center  hover:scale-110 transition-all duration size-12 p-2 rounded-full fixed right-3 bottom-5 ' src="AI-Generate-Sparkle-Box-White (2).svg" alt="AI-Generate" />

</button>

    </>
  )
}

export default Navbar