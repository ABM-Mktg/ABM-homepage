import React from "react";
import LeftImage from "../assets/images/credit.png";

function BusinessCredit(props) {
  return (
    <div id="business-credit" className="min-h-[80vh] md:min-h-[75vh] bg-[#00ffff] w-full pt-16 pb-0">
      <div className="flex flex-col md:flex-row md:w-[85%] w-full mx-auto items-center justify-center">
        <div>
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="md:w-[665px] md:h-[517px]"
          />
        </div>
        <div className="items-start flex flex-col pt-4 px-5 md:px-0">
          <h2 className="font-medium text-[40px] font-clash text-black">
            Business Credit: Your 
          <br className="hidden md:flex"/>
             &nbsp;Growth Foundation
          </h2>
          <p className="text-[16px] font-nunito text-[#1D1B1D] mb-[24px] leading-relaxed font-medium max-w-2xl">
            Without strong business credit, growth hits a ceiling. Separating
            personal and business credit is crucial for sustainable scaling.
          </p>

          <div className="mb-[14px]">
            <h3 className="font-medium text-[18px] font-clash text-black mb-[14px]">
              Why It's Critical
            </h3>
            <ul className="space-y-2 text-[16px] font-nunito text-[#1D1B1D] font-medium">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                45% of small businesses fail due to inadequate financing
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Strong business credit can unlock 10-100x more financing than
                personal credit
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Vendor terms and major contracts often depend on business credit
                strength
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[18px] font-clash text-black mb-[14px]">
              How We Help
            </h3>
            <ul className="space-y-2 text-[16px] font-nunito text-[#1D1B1D] font-medium">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Establish proper business credit foundations
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Create strategies to build strong credit scores
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Secure better financing terms and higher credit limits
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Protect personal assets while scaling operations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCredit;
