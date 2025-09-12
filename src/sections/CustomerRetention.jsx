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
      <div className="flex flex-col lg:flex-row lg:w-[85%] xl:w-[80%] 2xl:w-[75%] w-full mx-auto items-center justify-center -mt-[35%]  lg:-mt-0 pt-[85%] pb-[0%] lg:pt-[20%] lg:pb-[20%]">
        <div className="items-start flex flex-col pt-4 px-4">
          <h2 className="font-medium text-[40px] xl:text-[48px] 2xl:text-[56px] font-clash text-black">
            Customer Retention
         <br className="hidden lg:flex"/>
            The Profit Multiplier
          </h2>
          <p className="text-[16px] lg:text-[18px] xl:text-[20px] font-nunito text-[#1D1B1D] mb-[18px] leading-relaxed font-medium max-w-2xl">
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
        <div className="mt-10 px-8 lg:px-0 lg:pl-8 mb-[85%] lg:mb-0">
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="lg:w-[665px] lg:h-[517px]"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerRetention;
