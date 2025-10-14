import React from "react";
import aboutImage from "../assets/images/about.png";
import dots from "../assets/images/black-dots.svg";

function AboutUs(props) {
  return (
    <div id="about-us" className="min-h-[102vh] bg-[#F3C387] w-full -mt-[300px] sm:-mt-[225px] lg:-mt-[150px] xl:-mt-[225px] relative z-0 px-6 pt-20 pb-0">
      {/* Content container */}
      <div className=" md:max-w-[85%] max-w-[90%] mx-auto relative mt-[16rem] md:mt-36">
        {/* Main content area with image and text overlay */}
        <div className="relative">
          {/* Background image positioned on the right */}
               {/* <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-[#1D1B1D] font-clash mb-0 text-center md:text-left">
            About Us
          </h2> */}
          
          <div className="absolute right-0 top-[50px] w-full sm:w-[60%] md:w-[50%] h-[500px] sm:h-[600px] md:h-[688px]">
            <img
              src={aboutImage}
              alt="Team celebrating"
              className="w-full h-full object-cover object-center"
            />
            {/* Pink dot at image top right corner */}
            <div className="absolute -top-6 -right-11 w-[91px] h-[91px] bg-[#DE5FCB] rounded-full z-20"></div>
            {/* Dots pattern at bottom right */}
            <img
              src={dots}
              alt="Decorative dots"
              className="absolute bottom-6 -right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 z-10"
            />
            {/* Blur overlay where content overlaps */}
            <div className="hidden md:flex absolute top-16 sm:top-20 left-0 w-[50%] sm:w-[40%] md:w-[30%] h-[88%] backdrop-blur-sm bg-white/10"></div>
          </div>
          {/* About Us heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-[#1D1B1D] font-clash mb-0 text-center md:text-left">
            About Us
          </h2>
          {/* Text overlay with light blue background */}
          <div className="relative z-10 w-full w-[85%] md:w-[65%] bg-[#5FBEDE]/70 p-4 sm:p-6 md:p-8   lg:h-[608px] top-60 md:top-[44px] sm:top-11 mx-auto md:mx-0">
            <div className="space-y-4 text-[#555555] text-center md:text-left">
              <p className="text-[16px] leading-relaxed">
                Born from Fortune 500 expertise, reimagined for entrepreneurial
                visionaries. At the heart of ABM lies a small, elite team of
                industry veterans who chose to revolutionize how small
                businesses access world-class marketing services. After years of
                orchestrating powerful campaigns for global corporations at a
                leading international marketing firm, we recognized an untapped
                opportunity: bringing enterprise-level expertise to the vibrant
                world of small business innovation.
              </p>

              <p className="text-[16px] leading-relaxed">
                Our revelation was simple yet powerful – the most transformative
                ideas often come from small businesses and startups, yet they're
                systematically excluded from accessing premium marketing
                services due to prohibitive costs. We chose to bridge this gap,
                making our Fortune 500 expertise accessible to the very
                businesses that drive market innovation and diversity. This
                mission led us to create ABM, architecting a new approach to
                business growth that makes premium marketing services accessible
                to ambitious entrepreneurs. Our framework centers on four
                essential pillars of business success, carefully designed to
                transform promising ventures into market leaders.
              </p>

              <p className="text-[16px] leading-relaxed">
                We're more than consultants – we're growth partners who
                understand that every dollar counts and every decision matters.
                Our intimate team structure ensures that each client benefits
                from the full weight of our enterprise experience, delivered
                with the personal attention and cost-effectiveness that emerging
                businesses deserve.
              </p>

              <p className="text-[16px] leading-relaxed">
                Join us in rewriting the rules of business success, where
                world-class expertise meets entrepreneurial spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
