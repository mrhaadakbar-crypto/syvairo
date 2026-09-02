import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
 import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#121212] text-white px-10 pt-10 pb-4">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

  
        <div>
          <img
            src="SYVAIRO_logo.png"
            alt="SYVAIRO"
            className="w-[120px] mb-6"
          />

          <p className="text-[13px] text-gray-300 leading-5 max-w-[220px]">
            End-to-end AI agents & automation systems
            built to operate, scale, and deliver
            measurable business outcomes.
          </p>

          <div className="flex items-center gap-5 mt-4 text-gray-400">
            <FaFacebookF className="hover:text-[#22D3EE] cursor-pointer" />
            <FaTwitter className="hover:text-[#22D3EE] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#22D3EE] cursor-pointer" />
          </div>
        </div>


       
        <div>
          <h2 className="text-[14px] font-semibold mb-4">
            Quick Links
          </h2>

          <div className="flex flex-col gap-2 text-[13px] text-gray-300">
            <li>Home</li>
            <li>Services</li>
            <li>Media</li>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </div>
        </div>


      
        <div>
          <h2 className="text-[14px] font-semibold mb-4">
            Legal
          </h2>

          <div className="flex flex-col gap-2 text-[13px] text-gray-300">
            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

            <a href="#">
              Cookie Policy
            </a>

            <a href="#">
              FAQ
            </a>
          </div>
        </div>


   
        <div className=''>
          <h2 className="text-[14px] font-semibold mb-4">
            Contact
          </h2>

          <div className="flex flex-col gap-2 text-[13px] text-gray-300">
            <p>support@syvairo.com</p>
            <p>965-51573726</p>

            <a
              href="#"
              className="text-[#00CED1] hover:text-[#51DFE1]"
            >
              Book Strategy Call
            </a>
          </div>
        </div>

      </div>

        <hr className='text-[#2F2F2F] mt-10'/>
        <div className="  pt-7 flex  justify-between">
        <p className="text-[11px] text-gray-300">
          © 2025 Syvairo. All Rights Reserved.
        </p>

        <p className="text-[11px] text-gray-300">
          Developed by
          <span className="text-[#00CED1] ml-1">
            SYVAIRO
          </span>
        </p>

</div>
 </div>
  
  );
};

export default Footer;