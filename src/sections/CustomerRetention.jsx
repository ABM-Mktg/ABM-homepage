import React from "react";
import LeftImage from "../assets/images/retention.png";
import bg from "../assets/images/retention-bg.jpg"

function CustomerRetention(props) {
  return (
    <div
      id="customer-retention"
      className="w-full -mt-[8%]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% calc(100% - 8%)",
        backgroundPosition: "center top",
      }}
    >
      <div className="flex flex-col md:flex-row md:w-[85%] w-full mx-auto items-center justify-center -mt-[35%]  md:-mt-0 pt-[65%] pb-[0%] md:pt-[20%] md:pb-[20%]">
        <div className="items-start flex flex-col pt-4 px-4">
          <h2 className="font-medium text-[40px] font-clash text-black">
            Customer Retention
          </h2>
          <h2 className="font-medium text-[40px] font-clash text-black mb-2 -mt-1">
            The Profit Multiplier
          </h2>
          <p className="text-[16px] font-nunito text-[#1D1B1D] mb-[18px] leading-relaxed font-medium max-w-2xl">
            Acquiring a new customer costs 5-25 times more than retaining an
            existing one. Customer retention is the hidden engine of profitable
            growth.
          </p>

          <hr className="w-full h-[1px] bg-[#000000]/20 border-0 mb-3" />
          <div className="mb-[14px]">
            <h3 className="font-medium text-[18px] font-clash text-black mb-[14px]">
              Why It's Critical
            </h3>
            <ul className="space-y-2 text-[16px] font-nunito text-[#1D1B1D] font-medium">
              <li className="flex items-start">
                <span className="mr-2">•</span>A 5% increase in customer
                retention can increase profits by 25-95%
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Loyal customers spend 67% more than new ones
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Satisfied customers become brand advocates, driving free
                referral
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
                Design customer journey maps that identify and eliminate pain
                points
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Implement loyalty programs that reward and incentivize repeat
                business
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Create personalized communication strategies that strengthen
                relationships
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Develop feedback systems that help you continuously improve
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 px-8 md:px-0 md:pl-8 mb-[50%] md:mb-0">
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="md:w-[665px] md:h-[517px]"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerRetention;
