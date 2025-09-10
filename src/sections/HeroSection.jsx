import { useState } from "react";
import Header from "../components/Header";
import ContactModal from "../components/ContactModal";
import arrow from "../assets/images/arrow_outward.svg";
import image1 from "../assets/images/hero-image-1.png";
import image2 from "../assets/images/hero-image-2.png";
import image3 from "../assets/images/hero-image-3.png";
import dots from "../assets/images/white-dots.svg";
import bg from "../assets/images/hero-section.png"

const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <div
        className="min-h-[calc(100vh+15px)] bg-no-repeat bg-top w-full pt-8 relative z-10 px-[5%]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% calc(100% + 0px)",
          marginBottom: "-100px",
        }}
      >
        <Header onContactClick={() => setContactModalOpen(true)} />
    <section className="w-full   py-14 pb-5 md:pb-32 relative">
      {/* White Opacity Circle */}
      <div className="hidden md:block absolute top-[54px] right-[600px] w-[100px] h-[100px] bg-white/10 rounded-full z-0 border border-white/20"></div>

      {/* Three Headings in Column */}
      <div className="md:space-y-4 md:mb-0 max-w-3xl relative z-10">
        <h1 className="h-14 text-[32px] sm:text-[44px] md:text-[52px] font-clash font-medium text-black leading-tight">
          Comprehensive
        </h1>
        <h1 className="h-14 text-[32px] sm:text-[44px] md:text-[52px] font-clash font-medium text-black leading-tight">
          Business Growth
        </h1>
        <h1 className="h-14 text-[32px] sm:text-[44px] md:text-[52px] font-clash font-medium text-black leading-tight">
          Strategies & Solutions
        </h1>
      </div>

      {/* Content and Images Area */}
      <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-[22.5px] md:-mt-4">
        {/* Left Content Area */}
        <div className="flex-1">
          {/* Paragraph */}
          <p
            className="text-[16px] sm:text-[18px] font-nunito rounded mb-4 font-medium"
            style={{ lineHeight: "1.8" }}
          >
            We create guaranteed business success & growth by implementing four
            forces that define business success. It is important to know why
            these four areas and why they define your success
          </p>

          {/* Button and Small Image */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 md:gap-6">
            <a
              href="#contact"
              className="flex items-center bg-[#68EF78] hover:bg-[#68EF78] text-[#1D1B1D] text-[16px] font-semibold px-4 py-3 rounded-full font-nunito max-w-[180px] w-full sm:w-auto"
            >
              <span className="pl-2">Get Started</span>
              <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 ml-3">
                <img src={arrow} alt="Arrow Icon" />
              </div>
            </a>
            {/* Small Image */}
            <div className=" h-auto rounded-[16.54px] mt-6 sm:mt-0 flex-shrink-0">
              <img
                src={image1}
                alt="Image"
                className="w-full h-full object-cover rounded-[16.54px]"
              />
            </div>
          </div>
        </div>

        {/* Right Images Area */}
        <div className="flex md:flex-row flex-col flex-wrap mb-[100%] md:mb-0 md:flex-nowrap items-center md:items-end space-x-0 md:space-x-6 gap-6 md:gap-0 w-full md:w-auto">
          {/* Medium Image */}
          <div className=" h-auto rounded-[16.54px] flex-shrink-0">
            <img
              src={image2}
              alt="Image"
              className="w-full h-full object-cover rounded-[16.54px]"
            />
          </div>

          {/* Large Image */}
          <div className="relative  h-auto rounded-[16.54px] flex-shrink-0">
            {/* White dots placeholder */}
            <div className="absolute -top-6 -right-4 w-[60px] h-[50px] md:w-[103px] md:h-[84px] rounded z-0 pointer-events-none select-none">
              <img src={dots} alt="Decorative Dots" />
            </div>
            <img
              src={image3}
              alt="Image"
              className="relative z-10 w-full h-full object-cover rounded-[16.54px]"
            />
          </div>
        </div>
      </div>
    </section>
  </div>

  {/* Contact Modal - Rendered outside the hero section to avoid z-index issues */}
  <ContactModal 
    isOpen={contactModalOpen} 
    onClose={() => setContactModalOpen(false)} 
  />
</>
  );
};

export default HeroSection;
