import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
 import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#121212] text-white px-10 pt-10 pb-4">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + About */}
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


        {/* Quick Links */}
        <div>
          <h2 className="text-[14px] font-semibold mb-4">
            Quick Links
          </h2>

          <div className="flex flex-col gap-2 text-[13px] text-gray-300">
            <a href="#" className="hover:text-[#22D3EE]">Home</a>
            <a href="#" className="hover:text-[#22D3EE]">Services</a>
            <a href="#" className="hover:text-[#22D3EE]">Media</a>
            <a href="#" className="hover:text-[#22D3EE]">About</a>
            <a href="#" className="hover:text-[#22D3EE]">Careers</a>
            <a href="#" className="hover:text-[#22D3EE]">Contact</a>
          </div>
        </div>


        {/* Legal */}
        <div>
          <h2 className="text-[14px] font-semibold mb-4">
            Legal
          </h2>

          <div className="flex flex-col gap-2 text-[13px] text-gray-300">
            <a href="#" className="hover:text-[#22D3EE]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#22D3EE]">
              Terms of Service
            </a>

            <a href="#" className="hover:text-[#22D3EE]">
              Cookie Policy
            </a>

            <a href="#" className="hover:text-[#22D3EE]">
              FAQ
            </a>
          </div>
        </div>


        {/* Contact */}
        <div>
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


      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

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