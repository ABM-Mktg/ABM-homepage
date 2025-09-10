import React from "react";
import LeftImage from "../assets/images/matrix-left.svg";
import bg from "../assets/images/matrix-bg.png"

function GrowthMatrix(props) {
  return (
    <div
      id="growth-matrix"
      className="w-full mt-[-30%] md:mt-[-5%] pt-[10%] md:pt-0"
      style={{
        backgroundImage: `url(${bg})`,
        height: "auto", // define your height here
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% calc(100% + 0px)", // Extend background to cover overlap
        backgroundPosition: "center",
      }}
    >
      <div className="pt-[100%] md:pt-[21%] flex flex-col md:items-center px-5">
        <p className="hidden md:flex font-bold text-[30px] md:text-[52px] font-nunito bg-gradient-to-r from-[#B84F6A] to-[#511B29] bg-clip-text text-transparent drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          The Growth Matrix: Four Forces That
        </p>
        <p className="hidden md:flex font-bold text-[30px] md:text-[52px] font-nunito bg-gradient-to-r from-[#B84F6A] to-[#511B29] bg-clip-text text-transparent drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] -mt-4">
          Define Business Success
        </p>
        <p className="md:hidden font-bold text-[30px] text-center md:text-[52px] font-nunito bg-gradient-to-r from-[#B84F6A] to-[#511B29] bg-clip-text text-transparent drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          The Growth Matrix: Four Forces That Define Business Success
        </p>
        <p
          className="text-[16px] font-bold font-nunito max-w-4xl mt-[20px] text-justify mx-auto"
          style={{ lineHeight: "26px", textAlignLast: "center" }}
        >
          In today's competitive marketplace, businesses that thrive don't just
          excel in one area—they master the interconnected elements that create
          sustainable growth. Through our extensive experience with both Fortune
          500 companies and emerging businesses, we've identified four critical
          pillars that determine long-term success
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] md:w-[85%] w-full mx-auto md:mt-[20px] mb-[40%] md:mb-[8%] items-center justify-center">
        <div className=" mt-10 md:pl-8 ">
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="md:w-[665px] md:h-[517px]"
          />
        </div>
        <div className="items-start flex flex-col pt-4 px-4">
          <h2 className="text-center md:text-left font-medium text-[40px] font-clash text-black">
            Digital Marketing: Your
            <br className="hidden md:flex" /> Gateway To Growth
          </h2>
          <p className="text-[16px] font-nunito text-[#1D1B1D] mb-[7px] leading-relaxed font-medium max-w-2xl">
            Without visibility, even the best businesses remain hidden gems.
            Digital marketing isn't just about being online—it's about being
            found, chosen, and remembered.
          </p>

          <div className="mb-[7px]">
            <h3 className="font-medium text-[18px] font-clash text-black mb-4[7px">
              Why It's Critical
            </h3>
            <ul className="space-y-2 text-[16px] font-nunito text-[#1D1B1D] font-medium">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                87% of consumers begin product searches online
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Digital presence influences 67% of purchase decisions
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Companies with strong digital strategies see 2.8x better revenue
                growth
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[18px] font-clash text-black mb-[7px]">
              How We Help
            </h3>
            <ul className="space-y-2 text-[16px] font-nunito text-[#1D1B1D] font-medium">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Develop targeted social media campaigns that connect with your
                ideal customers
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Implement SEO strategies that drive organic traffic
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Create automated marketing systems that scale your reach
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Track and optimize your marketing ROI
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default GrowthMatrix;
