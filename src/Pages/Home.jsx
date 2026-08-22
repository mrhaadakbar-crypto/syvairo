import React from 'react'
import Navbar from '../Component/Navbar'
import Landing from '../Component/Landing'
import Herosection from '../Component/Herosection'
import Whychoose from '../Component/Whychoose'
import Clienttrust from '../Component/Clienttrust'
import Calculaterform from '../Component/Calculaterform'
import Frequentlyquestions from '../Component/Frequentlyquestions'
import Footer from '../Component/Footer'



const Home = () => {
  return (
    <>
{/* 1 */}
<div className="pb-10 bg-gradient-to-r from-[#080036] via-[#07001d] to-[#240145]">
<Navbar/>
<Landing/>

</div>

<div className="pb-12 bg-gradient-to-r from-[#050512] via-[#08002E] to-[#1B0138]">

<Herosection/>

</div>


<div className="pb-12 bg-gradient-to-r from-[#03020B] via-[#0F001E] to-[#17012D]">

<Whychoose/>

</div>

<div className="  pb-12 bg-gradient-to-r from-[#03030A] via-[#03030A] to-[#1E0139]">

<Clienttrust/>

</div>

<div className="pb-12 bg-gradient-to-r from-[#02030a] via-[#050516] to-[#1a0038] ">

<Calculaterform/>

</div>

<div className="pb-12 bg-gradient-to-r from-[#020106] via-[#110121] to-[#18012E]">

<Frequentlyquestions/>

</div>


<div className="bg-[#121212]">

<Footer/>
</div>







    </>
  )
}

export default Home