import React from 'react'

const Calculaterform = () => {
  return (
    <>

      <div className="pt-20">
        <div className="text-center mx-[650px]  border-2 border-[#22D3EE] w-[200px] p-1 rounded-full bg-[#0c182c75]">
          <h2 className='text-[#22D3EE] '>💰 Calculate your ROI</h2>
        </div>
      </div>




      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#51DFE1] mt-5">
          What could AI save you?
        </h1>

        <p className=' mt-5 text-white'>
          Use our calculator to discover the potential ROI of AI automation for your business. Note: This<br />
          is an estimated projection based on industry averages. Your actual savings may vary based on <br />
          specific workflow complexity."
        </p>

      </div>



      <div className=" mx-[500px] w-[520px] mt-10 bg-[#121219] border border-[#166879] rounded-xl px-7  py-8 ">

        <h2 className="text-[#7ce8e9] text-[22px] font-medium mb-6 ">
          Calculate Your Savings
        </h2>

        <div className="mb-5">

          <label className=" text-white text-[13px] font-semibold mb-2">
            ⏱ Estimated hours spent on repetitive tasks per month
          </label>

          <input
            type="number" placeholder="30" className=" w-full h-[46px] px-3 rounded-md bg-[#3b3064] border border-[#187c93] text-white outline-none focus:border-[#22d3ee] " />
        </div>


        <div className="mb-6">

          <label className="block text-white text-[13px] font-semibold mb-2">
            💵 Average all-in hourly cost employee (incl. salary, taxes, overhead)
          </label>

          <input
            type="number"
            placeholder="Includes salary, taxes, & overhead"
            className=" w-full h-[46px] px-3 rounded-md bg-[#3b3064] border border-[#187c93] text-white  placeholder:text-gray-500 outline-none focus:border-[#22d3ee] " />

        </div>


        <button className=" w-full h-[43px] rounded-full bg-gradient-to-r from-[#4285f4] to-[#21d4df] text-white text-sm font-semibold hover:scale-[1.02] transition-all duration-300 ">
          📈 Calculate ROI
        </button>

      </div>





    </>
  )
}

export default Calculaterform