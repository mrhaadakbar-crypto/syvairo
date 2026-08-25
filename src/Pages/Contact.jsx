import React from 'react'
import Contact1 from '../Component/Contact1'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Contact = () => {
    return (
        <>

            <div className=" bg-gradient-to-r from-[#050510] via-[#0F011E] to-[#1A0132]">
                <Navbar />
            </div>

            <Contact1 />
            
            <Footer/>


        </>
    )
}

export default Contact