import React from 'react'
import Navbar from '../Component/Navbar'
import { IoIosTrendingUp } from "react-icons/io";
import { LuBrain } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { LuMic } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { LuHeadphones } from "react-icons/lu";


import { LuNetwork } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { LuPlug } from "react-icons/lu";
import { LuCloud } from "react-icons/lu";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import Ourprocess from '../Component/Ourprocess';
import Footer from '../Component/Footer';
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Services1 = () => {
  return (
    <>

      <div className=" bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">
        <Navbar />
      </div>

      <div className="pb-10 bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">

        <div className="pt-10">
          <div className=" flex text-center gap-1 mx-[650px] p-1 border-2 border-[#22D3EE] w-[200px]  rounded-full bg-[#0c182c75]">
            <IoIosTrendingUp className="ml-2 mt-1 text-[#22D3EE] text-xl " />
            <h2 className='text-[#22D3EE] '>High ROI Automation</h2>
          </div>
        </div>


        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#51DFE1] mt-5">
            Top High-ROI AI Agents
          </h1>

          <p className=' mt-3 text-white'>Proven agents delivering immediate business impact.</p>

        </div>

        {/* 1 */}

        <div className="grid grid-cols-3 gap-2  justify-around mt-12">
          <div className="mt-5 ml-16 h-[370px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuBrain className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-16 font-bold text-2xl'> Operational Intelligence Agent</h3>
            <p className='text-white text-base mt-1 '>Autonomous analysis to pinpoint bottlenecks and<br />
              uncover high-impact automation opportunities <br />
              instantly</p>

            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>GPT, Claude, Llama, Mixtral, Gemini</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>RAG Pipelines (Pinecone, Weaviate, FAISS)</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>NLP: Summarization, NER, Intent Logic</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>GenAI: Text → Agent Logic, Voice → Actions</span>
              </li>

            </ul>
          </div>



          {/* 2 */}


          <div className="mt-5 ml-10 h-[370px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <FaWhatsapp className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>WhatsApp Al Receptionist</h3>
            <p className='text-white text-base mt-1 '>Handles customer queries, bookings & follow-ups<br />
              24/7<br /></p>

            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Instant replies</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Appointment booking</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>CRM synchronization</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Lead capture automation</span>
              </li>

            </ul>
          </div>





          {/* 3 */}


          <div className="mt-5 mr-12 h-[370px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <FiTrendingUp className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>Lead Qualification Agent</h3>
            <p className='text-white text-base mt-1 '>Automatically scores and qualifies leads in real-time.<br /> </p>

            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Smart lead scoring</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Auto follow-ups</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Pipeline optimization</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Higher conversions</span>
              </li>

            </ul>
          </div>



        </div>



        {/* 4 */}

        <div className="grid grid-cols-3 gap-2  justify-around mt-12">
          <div className="mt-5 ml-16 h-[370px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuMic className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>Al Call Center Agent</h3>
            <p className='text-white text-base mt-1 '>Voice agent that talks, books, and sends automated<br />
              reminders</p>

            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Inbound & outbound calls</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Slot booking</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Automated reminders</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Human-like voices</span>
              </li>

            </ul>
          </div>



          {/* 5 */}


          <div className="mt-5 ml-10 h-[370px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuFileText className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>Smart Quotation Agent</h3>
            <p className='text-white text-base mt-1 '>Generate pricing and PDF quotes instantly.<br /></p>

            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Dynamic pricing</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Instant PDFs</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Custom templates</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Faster deal closure</span>
              </li>

            </ul>
          </div>





          {/* 6 */}


          <div className="mt-5 mr-12 h-[370px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuHeadphones className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>Al Support & Ticketing Agent</h3>
            <p className='text-white text-base mt-1 '>Resolves tickets and syncs with CRM automatically.<br /></p>

            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Auto ticket resolution</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>CRM sync</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Priority handling</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>24/7 support</span>
              </li>

            </ul>
          </div>



        </div>


        <button className='mx-[600px] mt-16 w-[300px] p-4 rounded-full bg-[#139DBB] text-white text-[18px] font-bold  shadow-[0-2px_10px_#00eaff] text-center hover:scale-110 transition-all duration '>
          View Full 45+ Agent Catalog</button>


      </div>




      {/* AUTOMATION SOLUTIONS BY TIER */}




      <div className="pb-10 bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">

        <div className="pt-10">
          <div className=" flex text-center gap-1 mx-[550px] p-1 border-2 border-[#22D3EE] w-[350px]  rounded-full bg-[#0c182c75]">
            <LuCpu className="ml-2 mt-1 text-[#22D3EE] text-xl " />
            <h2 className='text-[#22D3EE] text-center '>OUR AUTOMATION SOLUTIONS — BY TIER</h2>
          </div>
        </div>


        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#51DFE1] mt-5">
            OUR AUTOMATION SOLUTIONS — BY TIER
          </h1>

          <p className=' mt-3 text-white'>Scalable AI automation designed for every stage of business growth.</p>

        </div>

        {/* 1 */}

        <div className="grid grid-cols-3 gap-2  justify-around mt-12">
          <div className="mt-5 ml-16 h-[370px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuBriefcaseBusiness className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>TIER-1 · SMB Ready-to-Launch</h3>


            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Communication & Support: AI Receptionist</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Sales & Marketing: Lead Qualification</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Customer Experience: Complaint Handling</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>HR & Internal: Resume Screening</span>
              </li>


              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Operations & Efficiency: AI Meeting Notes</span>
              </li>



              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Data & Analytics: And More</span>
              </li>





            </ul>
          </div>



          {/* 2 */}


          <div className="mt-5 ml-10 h-[370px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuBuilding2 className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>TIER-2 · Mid-to-Large Enterprise</h3>


            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Multi-Agent Business Assistants</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Back-Office Workflow Automation</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Enterprise CRM Automation</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Contract & Document Extraction</span>
              </li>


              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Advanced Reporting & Analytics</span>
              </li>



              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>And More</span>
              </li>


            </ul>
          </div>





          {/* 3 */}


          <div className="mt-5 mr-12 h-[400px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuShieldCheck className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>TIER-3 · Enterprise Custom Intelligence</h3>

            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Enterprise AI Brain (Central Intelligence)</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>COO-Level Decision Engine</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Inter-Department Orchestration</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Autonomous Corporate AI Control Tower</span>
              </li>


              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Risk, Audit & Compliance Automation</span>
              </li>


              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>And More</span>
              </li>



            </ul>
          </div>

          <button className='mx-[570px] mt-16 w-[350px] p-5 rounded-full bg-[#139DBB] text-white text-[18px] font-bold  shadow-[0-2px_10px_#00eaff] text-center hover:scale-110 transition-all duration '>
            View Full 45+ Agent Catalog</button>


        </div>
      </div>



      {/* TECH STACK FOR SCALE */}





      <div className="pb-10 bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">

        <div className="pt-10">
          <div className=" flex text-center gap-1 mx-[650px] p-1 border-2 border-[#22D3EE] w-[200px]  rounded-full bg-[#0c182c75]">
            <LuBrain className="ml-2  text-[#22D3EE] text-xl " />
            <h2 className='text-[#22D3EE] '>Core AI + LLM Stack</h2>
          </div>
        </div>


        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#51DFE1] mt-5">
            Tech Stack Built for Scale
          </h1>


        </div>

        {/* 1 */}

        <div className="grid grid-cols-3 gap-2  justify-around mt-12">
          <div className="mt-5 ml-16 h-[300px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuBrain className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-16 font-bold text-xl'>Core AI + LLM Stack</h3>

            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>GPT, Claude, Llama, Mixtral, Gemini</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>RAG Pipelines (Pinecone, Weaviate, FAISS)</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>NLP: Summarization, NER, Intent Logic</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>GenAI: Text → Agent Logic, Voice → Actions</span>
              </li>

            </ul>
          </div>



          {/* 2 */}


          <div className="mt-5 ml-10 h-[300px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuNetwork className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>Multi-Agent Architecture</h3>


            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Agent-to-Agent Communication</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Shared Memory & Persistent State</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Autonomous Workflow Pipelines</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Human Escalation</span>
              </li>

            </ul>
          </div>





          {/* 3 */}


          <div className="mt-5 mr-12 h-[300px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuCpu className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>RPA + Workflow Layer</h3>


            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>UiPath</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Power Automate</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Automation Anywhere</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>IBM RPA, Robocorp</span>
              </li>

            </ul>
          </div>



        </div>



        {/* 4 */}

        <div className="grid grid-cols-3 gap-2  justify-around mt-12">
          <div className="mt-5 ml-16 h-[300px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuPlug className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>API & Integration Layer</h3>


            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>n8n, Make.com</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Webhooks, REST, GraphQL</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>CRM, ERP, WhatsApp API</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Email, SMS, IVR, Payment</span>
              </li>

            </ul>
          </div>



          {/* 5 */}


          <div className="mt-5 ml-10 h-[320px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuCloud className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>Cloud & DevOps</h3>


            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>AWS / Azure / GCP</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Docker / Kubernetes</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Vercel / Cloudflare</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Redis / PostgreSQL / MongoDB</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Monitoring & Logging</span>
              </li>

            </ul>
          </div>





          {/* 6 */}


          <div className="mt-5 mr-12 h-[300px] w-[420px] p-6 items-center rounded-xl border-[3px] border-[#31636770] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
            <LuCpu className='absolute flex text-[#B7F2F2] border border-[#31636770] bg-[#31636770] size-14 p-2 rounded-lg' />

            <h3 className='text-white mt-20 font-bold text-2xl'>Security & Compliance</h3>


            <ul className="space-y-3 text-white mt-5 text-sm">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>IAM & Role-Based Access Control</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Data Encryption & Secrets Management</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Audit Logs & Compliance Checks</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span>Vulnerability Scanning & Threat Detection</span>
              </li>

            </ul>
          </div>



        </div>

        <Ourprocess />


      </div>




      <div className="bg-gradient-to-r from-[#020006] via-[#100120] to-[#1B0034]">

        <div className="flex justify-center ">
          <div className=" flex justify-center items-center gap-1  p-1 border-2 border-[#22D3EE]   rounded-full bg-[#0c182c75]">
          <FaPhoneAlt className=" ml-2  text-[#22D3EE] text-sm " />
          <h2 className='text-[#22D3EE] '>Real-Time AI Workforce</h2>
        </div>
        </div>

        <div className="pb-20 pt-1">

          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#51DFE1] mt-5">
              Meet Our AI Workforce
            </h1>

            <p className=' mt-3 text-[#AAAA9C]'>Experience the power of agents built by our own team, for our own business</p>

            <h3 className='font-bold mt-3 text-[#51DFE1] text-xl'>Contact Us Through Real AI Systems</h3>

          </div>


          {/* 1 */}
          <div className="gap-14 mt-3 flex justify-center">

            <div className="mt-10 bg-[#12121ab4] w-[515px] p-6 items-center rounded-xl border-[3px] border-[#0B5355] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
              <BsFillChatSquareTextFill className=' flex mx-[200px] text-[#B7F2F2] border border-[#11BAD1] bg-[#11BAD1] size-12 p-2 rounded-lg' />
              <h2 className='text-center text-white text-xl  mt-3 font-semibold'>Al Chatbot</h2>
              <h3 className='text-white mt-2 text-xs text-center'>Live & ready to interact</h3>
            </div>

            {/* 2 */}

            <div className="mt-10 bg-[#12121ab4] w-[515px] p-6 items-center rounded-xl border-[3px] border-[#0B5355] hover:shadow-[0-2px_10px_#00eaff] hover:scale-110 transition-all duration  ">
              <FaMicrophone className=' flex mx-[200px] text-[#B7F2F2] border border-[#11BAD1] bg-[#11BAD1] size-12 p-2 rounded-lg' />
              <h2 className='text-white text-xl text-center mt-3 font-semibold'>Voice Al Agent</h2>
              <p className='text-white mt-2 text-xs text-center '>Live & ready to interact</p>
            </div>

          </div>


        </div>

      </div>


      <Footer />












    </>
  )
}

export default Services1