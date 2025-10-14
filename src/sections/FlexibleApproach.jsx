import React from "react";
import GrowthPlan from "../assets/images/growth-plan.png";
import LeftImage from "../assets/images/solutions.png";
import bg from "../assets/images/approach-bg.jpg"

function FlexibleApproach(props) {
  return (
    <div
      className="w-full mt-[-15%] lg:mt-[-5%] pt-[25%] lg:pt-0 pb-[40%] lg:pb-10"
      style={{
        backgroundImage: `url(${bg})`,
        height: "auto", // define your height here
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% calc(100% + 0px)", // Extend background to cover overlap
        backgroundPosition: "center",
      }}
    >
      <div className=" pt-[30%] lg:pt-[26%] flex flex-col lg:items-center px-5">
        <p className="hidden lg:flex font-medium text-[30px] lg:text-[52px] xl:text-[60px] 2xl:text-[72px] font-clash ">
          Our Flexible Approach To Success
        </p>
        <p className="lg:hidden font-bold text-[24px] sm:text-[28px] text-center font-clash">
          Our Flexible Approach To Success
        </p>
        <p
          className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium font-nunito max-w-4xl mt-[16px] text-justify mx-auto"
          style={{ lineHeight: "26px", textAlignLast: "center" }}
        >
          Every business faces unique challenges and opportunities. That's why
          we offer two distinct ways to work together
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:w-[85%] xl:w-[80%] 2xl:w-[75%] w-full mx-auto items-center justify-center lg:-mt-0 pt-[1%] lg:pt-[1%] lg:pb-[1%]">
        <div className="items-center lg:items-start flex flex-col pt-2 px-4 lg:px-0 order-2 lg:order-1 w-full sm:w-auto">
          <h2 className="font-medium text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-clash text-black text-center lg:text-left">#01</h2>
          <h2 className="font-medium text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-clash text-black mb-2 -mt-1 text-center lg:text-left">
            Integrated Growth Plan
          </h2>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-nunito text-[#1D1B1D] mb-[18px] leading-relaxed font-medium max-w-2xl text-center lg:text-left">
            We can help you implement and optimize all four pillars
            simultaneously, creating a robust foundation for sustainable growth.
            This integrated approach ensures all elements work together
            harmoniously, maximizing your results.
          </p>
        </div>
        <div className="hidden sm:block mt-4 sm:mt-6 lg:mt-10 px-4 sm:px-6 lg:px-0 lg:pl-8 mb-[20%] sm:mb-[15%] lg:mb-0 order-1 lg:order-2">
          <img
            src={GrowthPlan}
            alt="Growth Plan"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:w-[591px] lg:h-[396px] mx-auto"
          />
        </div>
      </div>
      <div id="targeted-solutions" className="flex flex-col lg:flex-row lg:w-[85%] xl:w-[80%] 2xl:w-[75%] w-full mx-auto items-center justify-center pt-[1%] lg:pt-[3%] lg:pb-[17%] pb-[10%]">
        <div className="hidden sm:block px-4 sm:px-6 lg:px-0 order-2 lg:order-1">
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="w-full lg:w-[591px] lg:h-[559px] mx-auto"
          />
        </div>
        <div className="flex flex-col px-4 sm:px-6 lg:pl-20 lg:px-0 order-1 lg:order-2 mb-6 lg:mb-0 w-full sm:w-auto items-center lg:items-start">
          {/* Headings */}
          <h1 className="font-clash font-medium text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] text-black leading-tight mb-3 text-center lg:text-left">
            #02
            <br />
            Targeted Solutions
          </h1>

          {/* Paragraph */}
          <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-nunito font-medium text-black mb-3 max-w-3xl leading-relaxed text-center lg:text-left">
            Need to focus on one specific hurdle?  We'll create a customized
            solution that addresses your most pressing challenges while keeping
            the bigger picture in mind.  Some specific areas of impact include:
          </p>

          {/* Horizontal line */}
          <hr className="w-full h-[1px] bg-black/30 border-0 mb-3" />

          {/* Why It's Critical Section */}
          <div className="mb-3 w-full max-w-3xl">
            <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] lg:text-[16px] font-nunito font-medium text-black">
              <li>
                <span className="font-bold">Start Ups:</span> Who need an
                accelerated path to profit.
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  New or Stagnant Non Profit organizations:
                </span>{" "}
                Lack consistency in donations or seek to increase their
                donations.
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  From crisis to credibility:
                </span>{" "}
                  Businesses who have bad reviews/no reviews and need rapid
                recovery strategies.
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  Lack of A+ Business or Individual Credit: 
                </span>{" "}
                Individuals/Entities that need to enhance their credit to build
                larger credit lines.
              </li>
              <li>
                {" "}
                <span className="font-bold">YouTube Influencers:</span> We can
                assist in realigning your presence to build solid followers &
                reinvent to stir up lack of stagnancy.
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  New or Stagnant Businesses:  
                </span>{" "}
                  Break through plateaus. Revitalize your market presence.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexibleApproach;
