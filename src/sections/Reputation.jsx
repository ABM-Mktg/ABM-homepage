import React, { useEffect, useState } from "react";
import LeftImage from "../assets/images/reputation-1.png";

function Reputation(props) {
  return (
    <div id="reputation-management" className="w-full md:-mt-[6.5%] bg-[#F3C387] min-h-[70vh] sm:-mt-[35%] -mt-[29%]">
      <div className="flex flex-col md:flex-row md:w-[85%] w-full mx-auto items-center justify-center pt-[3%] md:pt-[5%]">
        <div className="">
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="md:w-[665px] md:h-[517px]"
          />
        </div>
        <div className="flex flex-col px-4">
          {/* Headings */}
          <h1 className="font-clash font-medium text-[40px] text-black leading-tight mb-3">
            Reputation Management: Your
            <br />
            Market Value Driver
          </h1>

          {/* Paragraph */}
          <p className="text-[18px] font-nunito font-medium text-black mb-3 max-w-3xl leading-relaxed">
            Your reputation is your most valuable asset. Let us help you protect
            and enhance it.
          </p>

          {/* Horizontal line */}
          <hr className="w-full h-[1px] bg-black/30 border-0 mb-3" />

          {/* Why It's Critical Section */}
          <div className="mb-3 w-full max-w-3xl">
            <h3 className="font-clash font-medium text-[18px] text-black mb-3">
              Why It’s Critical
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
