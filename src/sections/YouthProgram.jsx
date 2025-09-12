import React from "react";
import LeftImage from "../assets/images/youth-program.png";
import arrow from "../assets/images/arrow_outward.svg";

function YouthProgram() {
  return (
    <div
      id="youth-program"
      className="w-full bg-[#00ffff] min-h-[70vh] -mt-[5%] "
    >

      <div className="flex flex-col md:flex-row md:w-[85%] w-full mx-auto items-center justify-center pt-[4%]">
        <div className="items-start flex flex-col pt-4 px-4">
          <h2 className="font-semibold text-[40px] font-clash bg-gradient-to-r from-[#B84F6A] to-[#511B29] bg-clip-text text-transparent">
            Youth Program
          </h2>
          <p className="text-[24px] font-nunito text-[#1D1B1D] mb-[18px] leading-relaxed font-medium max-w-2xl mt-4">
            Youth entrepreneurship and apprenticeship programs that transform
            your ideas into successful businesses and careers
          </p>
          <p className="text-[20px] font-clash bg-gradient-to-r from-[#B84F6A] to-[#511B29] bg-clip-text text-transparent mb-[18px] leading-relaxed font-semibold max-w-2xl mt-4">
            Do you know talented youth that can benefit from this program?
          </p>
          <a
            href="https://www.abmize.com/V2R396"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#68EF78] hover:bg-[#68EF78] text-[#1D1B1D] text-[16px] font-semibold px-4 py-2 rounded-full font-nunito max-w-[220px] w-full sm:w-auto"
          >
            <span className="pl-2">Get Full Details</span>
            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 ml-3">
              <img src={arrow} alt="Arrow Icon" />
            </div>
          </a>
        </div>
        <div className="mt-10 px-8 md:px-0 md:pl-8   mb-10">
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="md:w-[442px] md:h-[442px]"
          />
        </div>
      </div>
    </div>
  );
}

export default YouthProgram;
