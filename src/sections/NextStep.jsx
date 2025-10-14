import React from "react";
import step1 from "../assets/images/next-step-1.png";
import step2 from "../assets/images/next-step-2.png";
import step3 from "../assets/images/next-step-3.png";
import call from "../assets/images/call.png";
import arrow from "../assets/images/arrow_outward.svg";
import top from "../assets/images/next-step-bottom.png";

function NextStep({ openContactModal }) {
  return (
    <div className="w-full bg-[#511B29] min-h-[80vh] -mt-4">
      <div className="flex flex-col md:items-center px-5">
        <p className="hidden md:flex font-medium text-[30px] md:text-[52px] font-clash text-white">
          Your Next Step
        </p>
        <p className="md:hidden font-bold text-[30px] text-center md:text-[52px] font-clash text-white">
          Your Next Step
        </p>
        <p
          className="text-[16px] font-medium font-nunito max-w-4xl mt-[16px] text-justify mx-auto text-white"
          style={{ lineHeight: "26px", textAlignLast: "center" }}
        >
          Whether you need comprehensive support or help with a specific
          challenge, we're here to guide you. Let's start with a free
          consultation to analyze your current situation and identify the most
          impactful path forward for your business.
        </p>

        <p
          className="text-[20px] font-medium font-nunito max-w-4xl mt-8 text-justify mx-auto text-white"
          style={{ lineHeight: "26px", textAlignLast: "center" }}
        >
          Work With Us For These 3 Reasons
        </p>
        {/* Work With Us Banner */}
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-[25px] py-2 md:p-3 flex items-center justify-center gap-4 border border-2 border-orange-200">
            {/* Brain Icon */}
            <div className="flex-shrink-0 pl-2">
              <img src={step1} alt="Image" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-[#511B29] font-semibold text-[18px] md:[18px] font-nunito">
                We specialize in small, medium and start up businesses
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-[25px] py-2 md:p-3 flex items-center justify-center gap-4 mt-[15px] border border-2 border-orange-200">
            {/* Brain Icon */}
            <div className="flex-shrink-0 pl-2">
              <img src={step2} alt="Image" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-[#511B29] font-semibold text-[18px] md:[18px] font-nunito">
                We have an effective program for increasing donations for your
                non profit organization
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-[25px] py-2 md:p-3 flex items-center justify-center gap-4 mt-[15px] border border-2 border-orange-200">
            {/* Brain Icon */}
            <div className="flex-shrink-0 pl-2">
              <img src={step3} alt="Image" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-[#511B29] font-semibold text-[18px] md:[18px] font-nunito">
                We create guaranteed success and growth in your business or NP
                organization
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 mb-10 gap-8">
          <button
            onClick={openContactModal}
            className="flex items-center bg-[#68EF78] hover:bg-[#68EF78] text-[#1D1B1D] text-[16px] font-semibold px-3 py-[7px] rounded-full font-nunito max-w-[200px] w-full sm:w-auto"
          >
            <span className="pl-2">Get Started</span>
            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 ml-3">
              <img src={arrow} alt="Arrow Icon" />
            </div>
          </button>
          <p className="flex items-center text-white text-[16px] font-semibold px-8 py-3 rounded-full font-nunito max-w-[250px] w-full sm:w-auto border border-white">
            <img src={call} alt="Call Icon" />
            <span className="pl-2">(877) 721-7447</span>
          </p>
        </div>
        {/* <img src={top} className="bg-red-200 w-full" /> */}
      </div>
    </div>
  );
}

export default NextStep;
