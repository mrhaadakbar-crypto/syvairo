import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>

            <div className="text-center">

                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#51DFE1] mt-5">
                        Move from AI Tools to AI Results
                    </h1>

                    <p className=' mt-3 text-white'>Syvairo deploys custom-built AI agents that run your business processes autonomously. <br />
                        Complete solutions, zero complexity.</p>

                </div>

                <div className="mx-[610px] my-4 border-2 border-[#22D3EE] w-[310px] p-1 rounded-full bg-[#0c182c75]">
                    <h2 className='text-[#22D3EE] mx-2'>The Story Behind SYVAIRO - Watch Now</h2>
                </div>



                <div className=" flex justify-center px-4">
                    <div className="rounded-[25px] border border-[#3a3150] bg-[#171329] p-5">
                        <div className="rounded-[15px] bg-black">


                            <video
                                className="w-full h-[255px] object-cover" controls >
                                <source src="https://syvairo.vercel.app/video.mp4" type="video/mp4" />
                            </video>

                        </div>
                    </div>
                </div>


                <div className="text-center mt-5">

                    <Link to='/from'>
                        <button className='mt-4 px-8 py-4 rounded-full bg-[#139DBB] text-white text-[18px] font-bold  shadow-[0-2px_10px_#00eaff] text-center hover:scale-110 transition-all duration '>
                            Discover your benefits →</button>
                    </Link>
                </div>
            </div>


        </>
    )
}

export default Landing