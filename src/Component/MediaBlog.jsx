import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer';

import { IoSearchSharp } from "react-icons/io5";


const MediaBlog = () => {
    return (
        <>

            <div className=" bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">
                <Navbar />
            </div>


            <div className="pt-1 pb-10 bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">

                <div className="text-center">
                    <h1 className="text-5xl font-bold text-[#ffffff] mt-5">
                        Media & Blog
                    </h1>

                </div>




                <div className="mt-10 flex justify-between ">


                    <input
                        type="text" placeholder=" Search posts..." className=" mx-[250px] w-[300px] h-[35px] px-3 rounded-md bg-[#130F17] border border-[#7a7a7a] text-white  focus:border-[#22d3ee] " />

                    <div className="flex mr-10 gap-3">

                        <h2 className='mt-1  text-[#989799]  border-2 text-sm border-[#1D0F2A] w-[50px] text-center p-1 rounded-md bg-[#1D0F2A] hover:bg-[#1EB4AF] hover:text-[#000000]'>All</h2>
                        <h2 className='mt-1  text-[#989799]  border-2 text-sm border-[#1D0F2A] w-[50px] text-center p-1 rounded-md bg-[#1D0F2A] hover:bg-[#1EB4AF] hover:text-[#000000]'>AI</h2>
                        <h2 className='mt-1  text-[#989799] border-2 text-sm border-[#1D0F2A] w-[90px] text-center p-1 rounded-md bg-[#1D0F2A] hover:bg-[#1EB4AF] hover:text-[#000000]'>Automation</h2>
                        <h2 className='mt-1  text-[#989799]  border-2 text-sm border-[#1D0F2A] w-[100px] text-center p-1 rounded-md bg-[#1D0F2A] hover:bg-[#1EB4AF] hover:text-[#000000]'>Case Studies</h2>
                        <h2 className='mt-1  text-[#989799]  border-2 text-sm border-[#1D0F2A] w-[120px] text-center p-1 rounded-md bg-[#1D0F2A] hover:bg-[#1EB4AF] hover:text-[#000000]'>Company News</h2>
                    </div>
                </div>




             <div className="mt-10 grid grid-cols-3 ">
                <div className=" mx-60 mt-5 h-[300px] w-[315px] bg-[#15131D] items-center rounded-xl border-[3px] border-[#2D2D32] hover:scale-110 transition-all duration ">

                    <div className="w-full h-[153px] ">
                        <img className='rounded-t-lg'
                            src="https://cdn.prod.website-files.com/677ca44598d8bae2633f6c0c/6788c4a31d5db7654cc767e7_iStock-2177416324.jpg"
                            alt="AI Transforming Businesses" />
                    </div>

                    
                    <div className="mt-5 mx-5">

                        <p className="text-[#19d8db] text-[12px] font-semibold mb-[8px]">
                            AI • Dec 18, 2025
                        </p>

                        <h2 className="text-white text-[16px] font-bold mb-[8px]">
                            AI Transforming Businesses in 2025
                        </h2>

                        <p className="text-white text-[13px]">
                            Discover how AI agents automate workflows
                            <br />
                            and increase efficiency.
                        </p>

                    </div>
                </div>



 

                <div className="mx-32 mt-5 h-[300px] w-[315px] bg-[#15131D] items-center rounded-xl border-[3px] border-[#2D2D32] hover:scale-110 transition-all duration ">

                    <div className="w-full h-[153px] ">
                        <img className='rounded-t-lg'
                            src="https://media.licdn.com/dms/image/v2/D5612AQEzLNef2Is2cg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1737565934588?e=2147483647&v=beta&t=Z7lhR1WrWG51w4HQCJZHyyyvc0j2gzR4Tdh34cM4Rhc"
                            alt="AI Transforming Businesses" />
                    </div>

                    
                    <div className="mt-8 mx-5">

                        <p className="text-[#19d8db] text-[12px] font-semibold mb-[8px]">
                            AI • Dec 18, 2025
                        </p>

                        <h2 className="text-white text-[16px] font-bold mb-[8px]">
                            AI Transforming Businesses in 2025
                        </h2>

                        <p className="text-white text-[13px]">
                            Discover how AI agents automate workflows
                            <br />
                            and increase efficiency.
                        </p>

                    </div>
                </div>

            


                <div className="mt-5 h-[300px] w-[315px] bg-[#15131D] items-center rounded-xl border-[3px] border-[#2D2D32] hover:scale-110 transition-all duration ">

                    <div className="w-full h-[153px] ">
                        <img className='rounded-t-lg'
                            src="https://goodcrypto.app/wp-content/uploads/2025/08/DCA-case-pic-1.jpg"
                            alt="AI Transforming Businesses" />
                    </div>

                    
                    <div className="mt-5 mx-5">

                        <p className="text-[#19d8db] text-[12px] font-semibold mb-[8px]">
                            AI • Dec 18, 2025
                        </p>

                        <h2 className="text-white text-[16px] font-bold mb-[8px]">
                            AI Transforming Businesses in 2025
                        </h2>

                        <p className="text-white text-[13px]">
                            Discover how AI agents automate workflows
                            <br />
                            and increase efficiency.
                        </p>

                    </div>
                </div>




                <div className=" mx-60  mt-10 h-[350px] w-[315px] bg-[#15131D] items-center rounded-xl border-[3px] border-[#2D2D32] hover:scale-110 transition-all duration ">

                    <div className="w-full h-[153px] ">
                        <img className='rounded-t-lg h-[200px] w-[400px]'
                            src="https://thumbs.dreamstime.com/b/company-news-chalkboard-background-concept-77312660.jpg"
                            alt="AI Transforming Businesses" />
                    </div>

                    
                    <div className="mt-16 mx-5">

                        <p className="text-[#19d8db] text-[12px] font-semibold mb-[8px]">
                            AI • Dec 18, 2025
                        </p>

                        <h2 className="text-white text-[16px] font-bold mb-[8px]">
                            AI Transforming Businesses in 2025
                        </h2>

                        <p className="text-white text-[13px]">
                            Discover how AI agents automate workflows
                            <br />
                            and increase efficiency.
                        </p>

                    </div>
                </div>



</div>





<div className="mt-20 mx-[700px] flex gap-3">

                        <h2 className='mt-1  text-[#989799]  border-2 text-sm border-[#2D2D32] w-[40px] text-center p-1 rounded-md bg-[#1b193060]  hover:text-[#000000]'>1</h2>
                        <h2 className='mt-1  text-[#989799]  border-2 text-sm border-[#2D2D32] w-[40px] text-center p-1 rounded-md bg-[#1b193060]  hover:text-[#000000]'>2</h2>
                        <h2 className='mt-1  text-[#989799] border-2 text-sm border-[#2D2D32] w-[40px] text-center p-1 rounded-md bg-[#1b193060]  hover:text-[#000000]'>3</h2>

                    </div>



            </div>

<Footer/>

        </>
    )
}

export default MediaBlog