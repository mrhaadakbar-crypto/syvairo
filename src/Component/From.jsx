import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { IoMdArrowBack } from "react-icons/io";

const From = () => {
  return (
    <>
   <div className="bg-[#000000]">
 <Navbar/>
</div>

<div className="pt-16 pb-20 h-full bg-[#000000]">


      <div className=" mx-[420px] w-[670px] h-[1120px] bg-[#0F0F0F] border border-[#166879] rounded-xl px-7  py-8 hover:shadow-[0-2px_10px_#00eaff] text-center hover:scale-110 transition-all duration  ">
        

      <IoMdArrowBack className='text-white' />


        <h2 className="text-[#7ce8e9]  text-3xl  font-semibold  text-center">
          Schedule a free consultation
        </h2>

        <p className='text text-center mt-5 text-white'>
          Discover how Syvairo can automate your business processes. Book a free consultation<br />
          for a personalized assessment
        </p>


        <div className="flex gap-4 justify-around mt-10">
          <div className="mb-5">

            <label className="block text-white text-[13px] font-semibold mb-2 text-start">
              Full Name*
            </label>

            <input
              type="text" placeholder="Your full name" className=" w-[300px] h-[50px] px-3 rounded-md bg-[#0c0c0c] border border-[#7a7a7a] text-white outline-none focus:border-[#22d3ee] " />
          </div>


          <div className="mb-6">

            <label className="block text-white text-[13px] font-semibold text-start mb-2">
              Company Name*
            </label>

            <input
              type="text"
              placeholder="Your company name"
              className="w-[300px] h-[50px] px-3 rounded-md bg-[#0A0A0A] border border-[#7a7a7a] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />

          </div>

        </div>


        <div className="mb-6">

          <label className="block text-white text-[13px] text-start font-semibold mb-2">
            Email Address*
          </label>

          <input
            type="Email"
            placeholder="name@company.com"
            className="w-[605px] h-[50px] px-3 rounded-md bg-[#0A0A0A] border border-[#7a7a7a] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />

        </div>





        <div className="mb-6">

          <label className="block text-white text-start text-[13px] font-semibold mb-2">
            Mobile Number (with country code)
          </label>

          <input
            type="text"
            placeholder="e.g. +965 1234 5678"
            className="w-[605px] h-[50px] px-3 rounded-md bg-[#0A0A0A] border border-[#7a7a7a] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />

        </div>




        <div className="mb-6">

          <label className="block text-white text-start text-[13px] font-semibold mb-2">
            Challenges & Automation Goals
          </label>

          <input
            type="text"
            placeholder="What processes you want to automate"
            className="w-[605px] h-[122px] px-3 rounded-md bg-[#0A0A0A] border border-[#7a7a7a] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />

        </div>


        <div className="text-end">
          <button className=' px-5 py-2 rounded-full bg-[#139DBB] text-white text-[18px] font-bold  shadow-[0-2px_10px_#00eaff] text-center hover:scale-110 transition-all duration '>  Submit →</button>
        </div>

        <div className=" mt-7 w-[606px] h-px bg-[#4B5563]"></div>


        <div className="mt-7"> 
        <p className="text-[14px] text-[#6b7577]">
          Your data will be processed according to our{" "}
          <span className="text-[#22D3EE]">
            Privacy Policy.
          </span>
        </p>

        <h3 className="text-[16px] font-bold text-white mt-3">
          What you can expect during the consultation:
        </h3>
        
        </div>




      <div className=" mt-5 grid grid-cols-2 gap-5">

{/* 1 */}

  <div className="w-[300px] h-[94px] bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl p-5 flex gap-4">
    
    <div className="text-[#22D3EE] text-[20px]">
      ◎
    </div>

    <div>
      <h3 className="text-[14px] font-bold text-[#F5F5F5]">
        Analysis of your current processes
      </h3>

      <p className="text-[12px] text-[#9CA3AF]">
        Identification of automation opportunities
      </p>
    </div>

  </div>


  {/* 2 */}

  <div className="w-[300px] h-[94px] bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl p-5 flex gap-4">
    
    <div className="text-[#16C60C] text-[20px]">
      ✓
    </div>

    <div>
      <h3 className="text-[14px] font-bold text-[#F5F5F5]">
        Al solutions explanation
      </h3>

      <p className="text-[12px] text-[#9CA3AF]">
       Customized advice for your business
      </p>
    </div>

  </div>

{/* 3 */}


  <div className="w-[300px] h-[94px] bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl p-5 flex gap-4">
    
    <div className="text-[#22D3EE] text-[20px]">
      ↗
    </div>

    <div>
      <h3 className="text-[14px] text-start font-bold text-[#F5F5F5]">
       ROI calculation and implementation plan
      </h3>

      <p className="text-[12px] text-start text-[#9CA3AF]">
      Concrete steps towards results
      </p>
    </div>

  </div>



{/* 4 */}




  <div className="w-[300px] h-[94px] bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl p-5 flex gap-4">
    
    <div className="text-[#22D3EE] text-[20px]">
      ◷
    </div>

    <div>
      <h3 className="text-[14px] font-bold text-start text-[#F5F5F5]">
       30-minute consultation
      </h3>

      <p className="text-[12px] text-[#9CA3AF]">
       No obligations. Directly applicable advice
      </p>
    </div>

  </div>




</div>



        <div className="mt-7"> 
        <p className="text-[14px] text-[#6b7577]">
          Discover more about our
          <span className="text-[#22D3EE]">
          services and approach.
          </span>
        </p>        
        </div>

      </div>
</div>

  <div className="bg-[#292929]">
 <Footer/>
</div>

    </>
  )
}

export default From