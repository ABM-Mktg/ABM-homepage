import React, { useEffect, useState } from "react";
import LeftImage from "../assets/images/reputation-1.png";

function Reputation(props) {
  return (
    <div id="reputation-management" className="w-full lg:-mt-[6.8%] bg-[#F3C387] min-h-[70vh] lg:-mt-[35%] -mt-[39%] reputation-section">
      <div className="flex flex-col lg:flex-row lg:w-[85%] xl:w-[80%] 2xl:w-[75%] w-full mx-auto items-center justify-center pt-[3%] lg:pt-[5%]">
        <div className="">
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="lg:w-[665px] lg:h-[517px]"
          />
        </div>
        <div className="flex flex-col px-4 items-center lg:items-start">
          {/* Headings */}
          <h1 className="font-clash font-medium text-[40px] xl:text-[48px] 2xl:text-[56px] text-black leading-tight mb-3 text-center lg:text-left">
            Reputation Management: Your
            <br />
            Market Value Driver
          </h1>

          {/* Paragraph */}
          <p className="text-[18px] lg:text-[20px] xl:text-[22px] font-nunito font-medium text-black mb-3 max-w-3xl leading-relaxed text-center lg:text-left">
            Your reputation is your most valuable asset. Let us help you protect
            and enhance it.
          </p>

          {/* Horizontal line */}
          <hr className="w-full h-[1px] bg-black/30 border-0 mb-3" />

          {/* Why It's Critical Section */}
          <div className="mb-3 w-full max-w-3xl">
            <h3 className="font-clash font-medium text-[18px] text-black mb-3">
              Why It's Critical
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[16px] font-nunito font-medium text-black">
              <li>
                93% of consumers read online reviews before making purchases
              </li>
              <li>One negative article can cost a business 22% of prospects</li>
              <li>Positive reputations can command premium pricing</li>
            </ul>
          </div>

          {/* How We Help Section */}
          <div className="w-full max-w-3xl">
            <h3 className="font-clash font-medium text-[18px] text-black mb-3">
              How We Help
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[16px] font-nunito font-medium text-black">
              <li>Build and monitor your online reputation</li>
              <li>Generate authentic positive reviews</li>
              <li>Address and resolve negative feedback</li>
              <li>Create trust-building content and messaging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reputation;
