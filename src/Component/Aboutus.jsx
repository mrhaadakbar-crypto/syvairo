import React from 'react'
import Navbar from '../Component/Navbar'
import { LuSettings, } from "react-icons/lu";
import { LuZap, } from "react-icons/lu";
import { LuChartNoAxesColumnIncreasing, } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
import { LuGlobe } from "react-icons/lu";
const Aboutus = () => {
    return (

        <>

            <div className=" bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">
                <Navbar />
            </div>

            <div className="pt-1 pb-10 bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">

                <div className=" pb-10 mt-20 items-center w-[100%] flex justify-around">

                    <div className="mt-1">
                        <h2 className='text-4xl font-bold mt-5  text-[#13D2D4]'>Helping Businesses <br />
                            Automate Workflows and <br />
                            Save Costs with AI <br />
                            Solutions</h2>
                        <h3 className='text-white mt-5'>Intelligent Automation | AI Agents | Scalable Growth</h3>

                        <div className="text-start mt-8">
                            <button className=' px-6 py-3 rounded-full bg-[#139DBB] text-white text-[18px] font-bold  shadow-[0-2px_10px_#00eaff] text-center hover:scale-110 transition-all duration '>Request a Demo →</button>

                        </div>
                    </div>

                    <div className="w-[35%]">
                        <img className='border-2 border-[#139DBB] rounded-3xl' src="https://cdn.mos.cms.futurecdn.net/RwwF5KLT44RzFhBEYeD25P.jpg" alt="Helping Businesses" />
                    </div>

                </div>

            </div>



            <div className="pt-1 pb-10 bg-gradient-to-r from-[#000003] via-[#0F011E] to-[#0F011E]">

                <h2 className=" mt-5 text-center text-[#67E8F9] text-4xl md:text-[40px] font-bold mb-10">
                    About Syvairo
                </h2>

                <div className="pb-10 items-center gap-3 flex justify-around">

                    <div className=" mt-1 ml-20">

                        <p className='text-white mt-5'>Syvairo is an AI automation company focused on helping businesses <br />
                            simplify operations, reduce manual effort, and improve efficiency through <br />
                            intelligent automation. <br />

                        </p>


                        <p className='text-white mt-5'>

                            We design and implement practical AI solutions such as workflow <br />
                            automation, AI agents, and process optimization that integrate smoothly <br />
                            with existing systems. Our goal is to deliver real business value by saving <br />
                            time, reducing operational costs, and enabling scalable growth. <br />

                        </p>

                        <p className='text-white mt-5'>

                            Syvairo follows a lean and flexible delivery approach, allowing us to adapt <br />
                            quickly to client needs while maintaining high quality and transparency.

                        </p>

                        {/* icon */}

                        <div className="flex justify-around">

                            {/* 1icon */}
                            <div className="text-start mt-8">
                                <LuSettings className='mx-10 flex text-[#B7F2F2] border border-[#31636770] bg-[#0a1b34a1] size-12 p-2 rounded-lg' />
                                <p className='text-white mt-2'>
                                    Simplify Operations
                                </p>
                            </div>

                            {/* 2icon */}

                            <div className="text-start mt-8">
                                <LuZap className='mx-10 flex text-[#B7F2F2] border border-[#31636770] bg-[#0a1b34a1] size-12 p-2 rounded-lg' />
                                <p className='text-white mt-2'>
                                    Reduce Manual Work
                                </p>
                            </div>


                            {/* 3icon */}


                            <div className="text-start mt-8">
                                <LuChartNoAxesColumnIncreasing className='mx-10 flex text-[#B7F2F2] border border-[#31636770] bg-[#0a1b34a1] size-12 p-2 rounded-lg' />
                                <p className='text-white mt-2'>
                                    Improve Efficiency
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="">
                        <img className='border-2 border-[#139DBB] rounded-3xl' src="https://eco-cdn.iqpc.com/eco/images/channel_content/images/tracelink-dscsa.webp" alt="About Syvairo" />
                    </div>

                </div>

            </div>



            <div className="pt-1 pb-10 bg-gradient-to-r from-[#020107] via-[#130025] to-[#1E0139]">

                <div className="text-center">
                <h1 className="text-4xl font-bold text-[#51DFE1] mt-5">
                    Our Mission & Vision
                </h1>

                <p className=' mt-3 text-[#AAAA9C]'>Driving intelligent automation and empowering businesses through AI innovation.</p>
            
                </div>

                
                {/* 1 */}
                <div className="flex justify-center gap-14 mt-10  ">

                    <div className="  bg-[#12121aa2] w-[515px] p-6 items-center rounded-xl border-[3px] border-[#0B5355] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <LuRocket className=' flex text-[#B7F2F2] border border-[#11BAD1] bg-[#11BAD1] size-12 p-2 rounded-lg' />
                        <h2 className='text-white text-xl text-start mt-3 font-semibold'>Our Vision</h2>
                        <p className='text-white mt-2 text-start '> To deliver intelligent, end-to-end workflow automation that helps <br />
                        businesses operate smarter, faster, and more efficiently.
                        </p>
                    </div>
                
                {/* 2 */}

                <div className="  bg-[#12121ab4] w-[515px] p-6 items-center rounded-xl border-[3px] border-[#0B5355] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
                        <LuGlobe  className=' flex text-[#B7F2F2] border border-[#11BAD1] bg-[#11BAD1] size-12 p-2 rounded-lg' />
                        <h2 className='text-white text-xl text-start mt-3 font-semibold'>Our Mission</h2>
                        <p className='text-white mt-2 text-start '> To become a trusted global partner in AI automation, enabling <br />
                        organizations of all sizes to adopt intelligent technologies and <br />
                        achieve sustainable digital transformation.
                        </p>
                </div>
                
                </div>

            </div>




        </>
    )
}

export default Aboutus