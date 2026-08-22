import React from 'react'
import { LuCircleCheck } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
const Ourprocess = () => {
  return (
    <>


<section className="bg-gradient-to-r from-[#020207] via-[#080417] to-[#18002e] py-16">

  {/* ===================== */}
  {/* TOP HEADING SECTION */}
  {/* ===================== */}

  <div className="text-center">

    {/* Badge */}
    <div className="flex justify-center">
      <div
        className="
          flex items-center gap-2
          border border-[#22D3EE]
          bg-[#0c182c75]
          px-5 py-1
          rounded-full
          hover:shadow-[0_0_20px_#00eaff]
          hover:scale-105
          transition-all duration-300
        "
      >
        <LuRocket className="text-[#22D3EE] text-sm" />

        <span className="text-[#22D3EE] text-sm font-semibold">
          Our process
        </span>
      </div>
    </div>


    {/* Heading */}
    <h1
      className="
        text-[50px]
        font-bold
        text-[#6FE4E7]
        mt-5
        drop-shadow-[0_0_12px_#22D3EE55]
      "
    >
      From idea to impact
    </h1>


    {/* Description */}
    <div className="mt-6 text-white text-[16px] leading-6">

      <p>
        Our structured 4-step process guarantees measurable results and
        sustainable value creation.
      </p>

      <p>
        Each phase is designed to minimize risks and maximize your ROI.
      </p>

    </div>


    {/* Bottom Points */}
    <div className="flex justify-center gap-8 mt-10 text-white">

      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        <span>Guaranteed KPIs</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
        <span>Measurable Results</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-purple-500 rounded-full"></span>
        <span>Continuous Optimization</span>
      </div>

    </div>

  </div>



  {/* ===================== */}
  {/* PROCESS TIMELINE */}
  {/* ===================== */}

  <div className="relative max-w-[1050px] mx-auto mt-16 px-5">

    {/* Vertical Line */}
    <div
      className="
        absolute
        left-[40px]
        top-5
        bottom-5
        w-[1px]
        bg-[#126879]
      "
    ></div>



    {/* ================= */}
    {/* PROCESS 1 */}
    {/* ================= */}

    <div className="relative flex items-start gap-10 mb-12 group">

      {/* Icon */}
      <div
        className="
          relative z-10
          w-10 h-10
          shrink-0
          rounded-full
          bg-gradient-to-br
          from-[#26D8DC]
          to-[#269DF4]
          flex items-center
          justify-center
          shadow-[0_0_22px_#22D3EE]
          group-hover:scale-110
          group-hover:shadow-[0_0_30px_#22D3EE]
          transition-all duration-300
        "
      >
        <LuCircleCheck className="text-white text-xl" />
      </div>


      {/* Card */}
      <div
        className="
          w-full
          min-h-[125px]
          p-6
          rounded-lg
          border
          border-[#159AAF]
          bg-[#080b19]

          hover:border-[#22D3EE]
          hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
          hover:scale-[1.02]

          transition-all
          duration-300
        "
      >

        <h3 className="text-white text-[18px] font-bold">
          Process Assessment
        </h3>


        <p className="text-white text-[12px] mt-4">

          <span className="text-[#22D3EE] font-semibold">
            Focus:
          </span>{" "}

          Understanding customer needs, identifying automation opportunities,
          and mapping current processes. We define a proposed solution and
          detail expected results using KPIs.

        </p>


        <p className="text-white text-[12px] mt-2">

          <span className="text-[#22D3EE] font-semibold">
            Output:
          </span>{" "}

          A detailed project proposal with a clear scope, timeline, and defined KPIs.

        </p>

      </div>

    </div>



    {/* ================= */}
    {/* PROCESS 2 */}
    {/* ================= */}

    <div className="relative flex items-start gap-10 mb-12 group">

      {/* Icon */}
      <div
        className="
          relative z-10
          w-10 h-10
          shrink-0
          rounded-full
          bg-gradient-to-br
          from-[#20E0A7]
          to-[#13BE83]
          flex items-center
          justify-center
          shadow-[0_0_22px_#16e8a5]
          group-hover:scale-110
          group-hover:shadow-[0_0_30px_#16e8a5]
          transition-all duration-300
        "
      >
        <LuCircleCheck className="text-white text-xl" />
      </div>


      {/* Card */}
      <div
        className="
          w-full
          min-h-[110px]
          p-6
          rounded-lg
          border
          border-[#3b3445]
          bg-[#111117]

          hover:border-[#22D3EE]
          hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
          hover:scale-[1.02]

          transition-all
          duration-300
        "
      >

        <h3 className="text-white text-[18px] font-bold">
          Pilot
        </h3>


        <p className="text-white text-[12px] mt-4">

          <span className="text-[#22D3EE] font-semibold">
            Focus:
          </span>{" "}

          We build and test a working minimal version of your automation
          solution with tangible results.

        </p>


        <p className="text-white text-[12px] mt-2">

          <span className="text-[#22D3EE] font-semibold">
            Output:
          </span>{" "}

          A validated proof-of-concept demonstrating value and meeting key KPIs.

        </p>

      </div>

    </div>



    {/* ================= */}
    {/* PROCESS 3 */}
    {/* ================= */}

    <div className="relative flex items-start gap-10 mb-12 group">

      {/* Icon */}
      <div
        className="
          relative z-10
          w-10 h-10
          shrink-0
          rounded-full
          bg-gradient-to-br
          from-[#C75AF4]
          to-[#B12DE0]
          flex items-center
          justify-center
          shadow-[0_0_22px_#ca4cff]
          group-hover:scale-110
          group-hover:shadow-[0_0_30px_#ca4cff]
          transition-all duration-300
        "
      >
        <LuCircleCheck className="text-white text-xl" />
      </div>


      {/* Card */}
      <div
        className="
          w-full
          min-h-[110px]
          p-6
          rounded-lg
          border
          border-[#159AAF]
          bg-[#07151d]

          hover:border-[#22D3EE]
          hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
          hover:scale-[1.02]

          transition-all
          duration-300
        "
      >

        <h3 className="text-white text-[18px] font-bold">
          Go-Live
        </h3>


        <p className="text-white text-[12px] mt-4">

          <span className="text-[#22D3EE] font-semibold">
            Focus:
          </span>{" "}

          Rolling out the full validated AI or automation solution including training.

        </p>


        <p className="text-white text-[12px] mt-2">

          <span className="text-[#22D3EE] font-semibold">
            Output:
          </span>{" "}

          A fully operational solution delivering immediate business value.

        </p>

      </div>

    </div>



    {/* ================= */}
    {/* PROCESS 4 */}
    {/* ================= */}

    <div className="relative flex items-start gap-10 group">

      {/* Icon */}
      <div
        className="
          relative z-10
          w-10 h-10
          shrink-0
          rounded-full
          bg-gradient-to-br
          from-[#22D3EE]
          to-[#13AEC8]
          flex items-center
          justify-center
          shadow-[0_0_22px_#22D3EE]
          group-hover:scale-110
          group-hover:shadow-[0_0_30px_#22D3EE]
          transition-all duration-300
        "
      >
        <LuCircleCheck className="text-white text-xl" />
      </div>


      {/* Card */}
      <div
        className="
          w-full
          min-h-[110px]
          p-6
          rounded-lg
          border
          border-[#3b3445]
          bg-[#12121a]

          hover:border-[#22D3EE]
          hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
          hover:scale-[1.02]

          transition-all
          duration-300
        "
      >

        <h3 className="text-white text-[18px] font-bold">
          Support & Optimization
        </h3>


        <p className="text-white text-[12px] mt-4">

          <span className="text-[#22D3EE] font-semibold">
            Focus:
          </span>{" "}

          Continuous monitoring, maintenance, and refinement of automated processes.

        </p>


        <p className="text-white text-[12px] mt-2">

          <span className="text-[#22D3EE] font-semibold">
            Output:
          </span>{" "}

          Guaranteed performance, proactive maintenance, and optimization.

        </p>

      </div>

    </div>

  </div>

</section>



    </>
  )
}

export default Ourprocess