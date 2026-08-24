import React from 'react'
import Careers1 from '../Component/Careers1'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Careers = () => {
    return (
        <>
            <div className=" bg-gradient-to-r from-[#050510] via-[#0F011E] to-[#1A0132]">
                <Navbar/>
            </div>

            <Careers1 />
            <Footer/>

        </>
    )
}

export default Careers