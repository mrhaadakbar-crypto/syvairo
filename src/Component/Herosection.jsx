import React from 'react'
import { RiBuildingLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { LuBot } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";





const Herosection = () => {
  return (
    <>
      <div className="pt-10">
        <button className="ml-[650px] w-[200px] rounded-full p-3 border-2 border-[#22D3EE] text-[#22D3EE] flex items-center justify-center gap-2">
          <RiBuildingLine />
          <h3>Business Solutions</h3>
        </button>
      </div>
      
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#51DFE1] mt-5">
          How AI Transforms Your Business
        </h1>

        <p className=' mt-3 text-white'>From manual chaos to fully automated operations in 3 steps.</p>

      </div>


      <div className="ml-60 mt-20 ">
        <img className='rounded-2xl w-[1000px] h-[900px]mx-auto shadow-[0-2px_10px_#00eaff] hover:shadow-[0-10px_20px_#00eaff] text-center  hover:scale-110 transition-all duration' src="https://syvairo.vercel.app/dashboard.png" alt="dashboard img" />
      </div>






      <div className=" my-28">
        {/* 1 */}
        <div className="grid grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center hover:scale-110 transition-all duration">
            <CiSettings className="text-[#22D3EE] text-3xl mb-4" />
            <h2 className="text-white text-lg font-semibold mb-3">Problem</h2>
            <p className="text-gray-400 text-sm leading-6 max-w-[250px]">Missed leads, slow teams, manual operations.</p>

          </div>
       

{/* 2 */}
         
          <div className="flex flex-col items-center hover:scale-110 transition-all duration">
            <LuBot className="text-[#22D3EE] text-3xl mb-4" />
            <h2 className="text-white text-lg font-semibold mb-3">Al Integration</h2>
            <p className="text-gray-400 text-sm leading-6 max-w-[250px]">Autonomous workflows that <br />
              manage replies, calls, and <br />
              bookings 24/7.
            </p>

          </div>


{/* 3 */}

          <div className="flex flex-col items-center hover:scale-110 transition-all duration">
            <IoIosTrendingUp  className="text-[#22D3EE] text-3xl mb-4" />
            <h2 className="text-white text-lg font-semibold mb-3">Problem</h2>
            <p className="text-gray-400 text-sm leading-6 max-w-[250px]">Missed leads, slow teams, manual operations.</p>

          </div>


        </div>
 </div>
 

             <div className="text-center">
            <button className=' px-8 py-4 rounded-full bg-[#139DBB] text-white text-[18px] font-bold  shadow-[0-2px_10px_#00eaff] text-center hover:scale-110 transition-all duration '>  Calculate Your ROI</button>
            </div>
    </>
  )
}

export default Herosection