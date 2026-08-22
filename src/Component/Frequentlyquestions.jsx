import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";



const Frequentlyquestions = () => {
    const[frist1, setfrist1]= useState(true);
    const[frist2, setfrist2]= useState(true);
    const[frist3, setfrist3]= useState(true);
    const[frist4, setfrist4]= useState(true);
    const[frist5, setfrist5]= useState(true);
  return (
    <>

 <div className="pt-20">
        <div className="text-center mx-[720px] border-2 border-[#22D3EE] w-[100px] p-1 rounded-full bg-[#0c182c75]">
          <h2 className='text-[#22D3EE] '>💬 Support</h2>
        </div>
      </div>




      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#51DFE1] mt-5">
          Frequently Asked Questions
        </h1>

      </div>

{/* 1 */}
        
 <div className="hover:shadow-[0-2px_10px_#00eaff]  mt-10 mx-[250px] border-2 border-[#22D3EE] w-[1000px] p-5 rounded-xl bg-[#170f1f8a]">
<h2 onClick={()=> setfrist1(!frist1)} className='text-white text-xl font-semibold flex justify-between ml-5'>How long does implementation take?  <FiChevronDown className="text-[#22D3EE] text-xl mx-" /> </h2> 
<h2 className={`text-white mx-5 mt-5 ${frist1 ? "hidden" : "block"} `}>Implementation typically takes 2-6 weeks depending on your workflow complexity.</h2>
 </div>

{/* 2 */}

 <div className="hover:shadow-[0-2px_10px_#00eaff]  mt-5 mx-[250px] border-2 border-[#22D3EE] w-[1000px] p-5 rounded-xl bg-[#170f1f8a]">
<h2 onClick={()=> setfrist2(!frist2)} className='text-white text-xl font-semibold flex justify-between ml-5'>Can Syvairo(Al Solutions) integrate with existing software?<FiChevronDown className="text-[#22D3EE] text-xl mx-" /> </h2> 
<h2 className={`text-white mx-5 mt-5 ${frist2 ? "hidden" : "block"} `}>Yes, our Al solutions integrate with CRMs, ERPs, WhatsApp, and other enterprise tools.</h2>
 </div>

{/* 3 */}

 <div className="hover:shadow-[0-2px_10px_#00eaff]  mt-5 mx-[250px] border-2 border-[#22D3EE] w-[1000px] p-5 rounded-xl bg-[#170f1f8a]">
<h2 onClick={()=> setfrist3(!frist3)} className='text-white text-xl font-semibold flex justify-between ml-5'>How much cost savings can I expect?<FiChevronDown className="text-[#22D3EE] text-xl mx-" /> </h2> 
<h2 className={`text-white mx-5 mt-5 ${frist3 ? "hidden" : "block"} `}>Clients typically see 20-50% savings in operational costs within the first 3 months.</h2>
 </div>


{/* 4 */}

 <div className="hover:shadow-[0-2px_10px_#00eaff]  mt-5 mx-[250px] border-2 border-[#22D3EE] w-[1000px] p-5 rounded-xl bg-[#170f1f8a]">
<h2 onClick={()=> setfrist4(!frist4)} className='text-white text-xl font-semibold flex justify-between ml-5'>Do I need technical knowledge to use Syvairo(Al Solutions)?<FiChevronDown className="text-[#22D3EE] text-xl mx-" /> </h2> 
<h2 className={`text-white mx-5 mt-5 ${frist4 ? "hidden" : "block"} `}>No, our solutions are plug-and-play with intuitive dashboards, requiring minimal technical knowledge.</h2>
 </div>


{/* 6 */}

 <div className="hover:shadow-[0-2px_10px_#00eaff]  mt-5 mx-[250px] border-2 border-[#22D3EE] w-[1000px] p-5 rounded-xl bg-[#170f1f8a]">
<h2 onClick={()=> setfrist5(!frist5)} className='text-white text-xl font-semibold flex justify-between ml-5'>Are enterprise-level solutions available?<FiChevronDown className="text-[#22D3EE] text-xl mx-" /> </h2> 
<h2 className={`text-white mx-5 mt-5 ${frist5 ? "hidden" : "block"} `}>Absolutely! Our system is modular and scalable to handle SMBs and enterprise needs.</h2>
 </div>







    </>
  )
}

export default Frequentlyquestions