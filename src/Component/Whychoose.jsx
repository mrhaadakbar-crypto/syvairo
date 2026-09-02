import React from 'react'
import { RiBuildingLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { GoZap } from "react-icons/go";
import { LuClock3 } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
import { LuScale } from "react-icons/lu";
import { GrSettingsOption } from "react-icons/gr";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoCheckmark } from "react-icons/io5";



const Whychoose = () => {
    return (
        <>

            <div className="pt-10">
                <button className="mx-auto w-[200px] rounded-full p-3 border-2 border-[#22D3EE] text-[#22D3EE] flex items-center justify-center gap-2">
                    <IoIosStar className='text-[#FFC83D]' />
                    <h3>Business Solutions</h3>
                </button>
            </div>


            <div className="text-center">
                <h1 className="text-5xl font-bold text-[#51DFE1] mt-5">
                    Why Businesses Choose Syvairo
                </h1>
            </div>




            <div className="my-16 ">
                {/* 1 */}
                <div className="grid grid-cols-3 gap-12 text-center justify-around ">
                    <div className=" ml-14 w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <GoZap className='absolute  flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
                        <h2 className='text-white mt-2 ml-7 font-bold text-xl'> Al that acts, not just answers</h2>
                        <p className='text-white mt-4 ml-2 '>Tasks completed end-to-end automatically</p>
                    </div>


                    {/* 2 */}

                    <div className="ml-6 w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff]  hover:scale-110 transition-all duration  ">
                        <LuClock3 className=' ml-4 absolute  flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
                        <h2 className='text-white mt-2  font-bold text-xl'>No missed leads - 24/7</h2>
                        <p className='text-white mt-4  '>Follow-ups & replies anytime</p>
                    </div>


                    {/* 3 */}


                    <div className=" w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <LuRocket className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
                        <h2 className='text-white mt-2 ml-10 font-bold text-xl'>45+ automation agents ready</h2>
                        <p className='text-white mt-4 mr-10 '>Launch in days, not months</p>
                    </div>


                    {/* 4 */}


                    <div className=" ml-14 w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <IoExtensionPuzzleOutline className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
                        <h2 className='text-white mt-2 ml-10 font-bold text-xl'>45+ automation agents ready</h2>
                        <p className='text-white mt-4 mr-10 '>API, CRM, ERP, WhatsApp</p>
                    </div>


                    {/* 5 */}


                    <div className=" ml-5 w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <LuScale className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
                        <h2 className='text-white mt-2 ml-11 font-bold text-xl'>Scalable from SMB → Enterprise</h2>
                        <p className='text-white mt-4 mr-10 '>Modular automation architecture</p>
                    </div>

                    {/* 6 */}

                    <div className=" w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <GrSettingsOption className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
                        <h2 className='text-white mt-2  font-bold text-xl'>Custom Al & RPA solutions</h2>
                        <p className='text-white mt-4 mr-10 '>Tailored to your exact workflow</p>
                    </div>


                </div>
            </div>



            <div className="text-center">
                <h1 className="text-3xl font-bold text-[#51DFE1] mt-5">
                    CASE STUDIES — Real Results from AI Agents
                </h1>
            </div>



<div className="grid grid-cols-3 gap-12  justify-around mt-20">
            <div className="mt-5 ml-20 h-[370px] w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                <FiPhone  className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
            <h2 className='mt-1  text-[#1EB4AF] ml-56 border-2 text-sm border-[#1EB4AF] w-[120px] text-center p-1 rounded-md bg-[#31636770]'>CASE STUDIES</h2>
            
            <h3 className='text-white text-center mt-9 font-bold text-xl'> Al Receptionist (Incoming Calls) </h3>
             <h4 className='text-[#1AD2E7] text-center text-sm mt-2'>Mid-sized E-commerce Retailer - USA</h4>
            <h5 className='text-white text-base text-center mt-1 '>Long wait times and unanswered calls resulted <br /> in lost leads</h5>

            <p className='text-white text-sm  mt-5'><span className="text-[#22D3EE]">✓</span> calls without human intervention</p>
           <p className='text-white text-sm mt-4'><span className="text-[#22D3EE]">✓</span> 30% increase in leads captured</p>
           <p className='text-white text-sm  mt-4'><span className="text-[#22D3EE]">✓</span> Staff focused on high-value tasks</p>

            </div>




            <div className="mt-5 ml-10 h-[370px] w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                <FiPhone  className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
            <h2 className='mt-1  text-[#1EB4AF] ml-56 border-2 text-sm border-[#1EB4AF] w-[120px] text-center p-1 rounded-md bg-[#31636770]'>CASE STUDIES</h2>
            
            <h3 className='text-white text-center mt-9 font-bold text-xl'> Al Receptionist (Incoming Calls) </h3>
             <h4 className='text-[#1AD2E7] text-center text-sm mt-2'>Mid-sized E-commerce Retailer - USA</h4>
            <h5 className='text-white text-base text-center mt-1 '>Long wait times and unanswered calls resulted <br /> in lost leads</h5>

            <p className='text-white text-sm  mt-5'><span className="text-[#22D3EE]">✓</span> calls without human intervention</p>
           <p className='text-white text-sm mt-4'><span className="text-[#22D3EE]">✓</span> 30% increase in leads captured</p>
           <p className='text-white text-sm  mt-4'><span className="text-[#22D3EE]">✓</span> Staff focused on high-value tasks</p>

            </div>





                        <div className="mt-5  h-[370px] w-[400px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                <FiPhone  className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-10 p-2 rounded-lg' />
            <h2 className='mt-1  text-[#1EB4AF] ml-56 border-2 text-sm border-[#1EB4AF] w-[120px] text-center p-1 rounded-md bg-[#31636770]'>CASE STUDIES</h2>
            
            <h3 className='text-white text-center mt-9 font-bold text-xl'> Al Receptionist (Incoming Calls) </h3>
             <h4 className='text-[#1AD2E7] text-center text-sm mt-2'>Mid-sized E-commerce Retailer - USA</h4>
            <h5 className='text-white text-base text-center mt-1 '>Long wait times and unanswered calls resulted <br /> in lost leads</h5>

            <p className='text-white text-sm  mt-5'><span className="text-[#22D3EE]">✓</span> calls without human intervention</p>
           <p className='text-white text-sm mt-4'><span className="text-[#22D3EE]">✓</span> 30% increase in leads captured</p>
           <p className='text-white text-sm  mt-4'><span className="text-[#22D3EE]">✓</span> Staff focused on high-value tasks</p>

            </div>



</div>


        </>
    )
}

export default Whychoose