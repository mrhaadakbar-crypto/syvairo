import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";

const Contact1 = () => {
    return (
        <>
            <div className="pt-1 pb-10 bg-gradient-to-r from-[#050510] via-[#0F011E] to-[#1A0132]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#51DFE1] mt-5">
                        Contact Syvairo
                    </h1>

                </div>

                <div className="mt-12 pb-10 gap-20 flex justify-center">

                    <div className=" mt-1 ">


                        <div className="mt-">
                            <h2 className='text-3xl mt-5  font-semibold  text-[#13D2D4]'>
                                Contact Us
                            </h2>
                            <p className='text-[#9AAA9B] mt-1'>Do you have a question? Call us, email us, or fill out the contact form<br />
                                and we’ll get back to you as soon as possible.
                            </p>


                        </div>

                        {/* 1icon */}


                        <div className="flex  items-center gap-4 px-4 py-4 cursor-pointer">
                            <FaPhoneAlt className='text-cyan-400 text-xl' />


                            <div className=" text-start ">
                                <h2 className='text-white '>
                                    Phone
                                </h2>
                                <p className='text-[#9AAA9B] mt-1 text-xs'>+965-51573726</p>
                            </div>

                        </div>


                        {/* 2icon */}

                        <div className="flex  items-center gap-4 px-4 py-4 cursor-pointer">
                            <FaWhatsapp className='text-[#4ADE80] text-2xl' />


                            <div className=" text-start ">
                                <h2 className='text-white '>
                                    WhatsApp
                                </h2>
                                <p className='text-[#9AAA9B] mt-1 text-xs'>+965-51573726</p>
                            </div>

                        </div>




                        {/* 3icon */}




                        <div className="flex  items-center gap-4 px-4 py-4 cursor-pointer">
                            <MdEmail className='text-[#624485] text-2xl' />


                            <div className=" text-start ">
                                <h2 className='text-white '>
                                    Email
                                </h2>
                                <p className='text-[#9AAA9B] mt-1 text-sm'>
                                    sales@syvairo.com <br />
                                    support@syvairo.com <br />
                                    careers@syvairo.com
                                </p>
                            </div>

                        </div>



                    </div>





                    <div className=" w-[500px] h-[430px] bg-[#0F0F0F] border border-[#166879] rounded-xl px-7  p-8  text-center   ">



                        <div className=" flex gap-4  justify-center ">

                            <input
                                type="text"
                                placeholder="First Name" 
                                className=" w-[200px] h-[45px] px-3 rounded-md bg-[#121212] border border-[#139DBB] text-white outline-none focus:border-[#22d3ee] " />

                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-[200px] h-[45px]  px-3 rounded-md bg-[#121212] border border-[#139DBB] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />

                        </div>

                        <div className="mb-6">

                            <input
                                type="Email"
                                placeholder="Company Name (Optional)"
                                className="mt-5 w-[420px] h-[45px] px-3 rounded-md bg-[#121212] border border-[#139DBB] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />

                        </div>


                        <input
                            type="text"
                            placeholder="Your Email"
                            className="mt-1 w-[420px] h-[45px] px-3 rounded-md bg-[#121212] border border-[#139DBB] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />


                        <input
                            type="text"
                            placeholder="Tell us about your automation goals..."
                            className=" mt-5 w-[420px] h-[100px] px-3 rounded-md bg-[#121212] border border-[#139DBB] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />


                        <div className="mt-5">
                            <button className='w-[420px] h-[40px] rounded-md bg-[#139DBB] text-white text-[18px] font-bold '> send</button>
                        </div>


                    </div>


                </div>



               <div className="mt-20">

                <div className="text-center">
                <h1 className="text-4xl font-bold text-[#51DFE1] mt-5">
                    Meet Our AI Workforce
                </h1>

                <p className=' mt-3 text-[#AAAA9C]'>Experience the power of agents built by our own team, for our own business</p>
            
                </div>

           
                {/* 1 */}
                <div className="gap-14 mt-3 flex justify-center">

                    <div className="mt-10 bg-[#12121ab4] w-[515px] p-6 items-center rounded-xl border-[3px] border-[#0B5355] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <BsFillChatSquareTextFill  className=' flex mx-[200px] text-[#B7F2F2] border border-[#11BAD1] bg-[#11BAD1] size-12 p-2 rounded-lg' />
                        <h2 className='text-center text-white text-xl  mt-3 font-semibold'>Al Chatbot</h2>
                        <h3 className='text-white mt-2 text-xs text-center'>Live & ready to interact</h3>
                    </div>
                
                {/* 2 */}

                <div className="mt-10 bg-[#12121ab4] w-[515px] p-6 items-center rounded-xl border-[3px] border-[#0B5355] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <FaMicrophone   className=' flex mx-[200px] text-[#B7F2F2] border border-[#11BAD1] bg-[#11BAD1] size-12 p-2 rounded-lg' />
                        <h2 className='text-white text-xl text-center mt-3 font-semibold'>Voice Al Agent</h2>
                        <p className='text-white mt-2 text-xs text-center '>Live & ready to interact</p>
                </div>
                
                </div>


</div>


            </div>
        </>
    )
}

export default Contact1