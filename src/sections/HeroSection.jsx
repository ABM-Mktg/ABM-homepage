import { useState } from "react";
import Header from "../components/Header";
import ContactModal from "../components/ContactModal";
import arrow from "../assets/images/arrow_outward.svg";
import image1 from "../assets/images/hero-image-1.png";
import image2 from "../assets/images/hero-image-2.png";
import image3 from "../assets/images/hero-image-3.png";
import dots from "../assets/images/white-dots.svg";
import bg from "../assets/images/hero-section.png";
import "../styles/customResponsive.css"; // Import the custom CSS

const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("default");

  const openModalFromHeader = () => {
    setModalSource("header");
    setContactModalOpen(true);
  };

  const openModalFromGetStarted = () => {
    setModalSource("get-started");
    setContactModalOpen(true);
  };

  return (
    <>
      <div
        className="min-h-[calc(100vh+15px)] bg-no-repeat bg-top w-full pt-8 relative z-10 px-[5%] nest-hub-container"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% calc(100% + 0px)",
          marginBottom: "-100px",
        }}
      >
        <Header onContactClick={openModalFromHeader} />
        <section className="w-full py-14 pb-5 lg:pb-32 relative">
          {/* White Opacity Circle */}
          <div className="hidden lg:block absolute top-[54px] right-[600px] w-[100px] h-[100px] bg-white/10 rounded-full z-0 border border-white/20"></div>

          {/* Three Headings in Column */}
          <div className="lg:space-y-4 mb-24 sm:mb-16 lg:mb-20 xl:mb-40 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl relative z-10">
            <h1 className="h-14 text-[30px] sm:text-[44px] lg:text-[52px] xl:text-[60px] 2xl:text-[72px] font-nunito font-bold text-black leading-tight">
              We Create Guaranteed Business &nbsp;
              <br className="hidden lg:flex"/>
              Success & Growth
            </h1>
          </div>

          {/* Content and Images Area */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-3 lg:gap-[22.5px] lg:mt-6 nest-hub-content">
            {/* Left Content Area */}
            <div className="flex-1">
              {/* Paragraph */}
              <p
                className="text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-nunito rounded mb-4 font-medium nest-hub-paragraph"
                style={{ lineHeight: "1.8" }}
              >
                In today's competitive marketplace, businesses that thrive don't
                just excel in one area -- they master the interconnected
                elements that create sustainable growth. Through our extensive
                experience with both Fortune 500 companies, emerging businesses
                and small business owners, we've identified four critical
                pillars that determine long-term success. Our comprehensive
                business growth strategies & solutions will provide a stable
                foundation for your business to profit and keep growing!
              </p>

              {/* Button and Small Image */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:justify-between gap-6 sm:gap-20 lg:gap-6 xl:gap-8 nest-hub-button-area">
                <button
                  type="button"
                  onClick={openModalFromGetStarted}
                  className="flex items-center bg-[#68EF78] hover:bg-[#68EF78] text-[#1D1B1D] text-[16px] lg:text-[18px] font-semibold px-4 py-2 lg:px-6 lg:py-2 rounded-full font-nunito max-w-[180px] lg:max-w-[220px] w-full sm:w-auto"
                >
                  <span className="pl-2">Get Started</span>
                  <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 lg:w-12 lg:h-12 ml-3">
                    <img src={arrow} alt="Arrow Icon" />
                  </div>
                </button>
                {/* Small Image */}
                <div className="h-auto rounded-[16.54px] mt-6 sm:mt-0 flex-shrink-0 nest-hub-small-image-desktop">
                  <img
                    src={image1}
                    alt="Image"
                    className="w-full h-full object-cover rounded-[16.54px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Images Area - Modified for 1024px */}
            <div className="flex lg:flex-row flex-col flex-wrap mb-[100%] sm:mb-[30%] lg:mb-0 lg:flex-nowrap items-center lg:items-end space-x-0 lg:space-x-6 xl:space-x-8 gap-6 lg:gap-0 xl:gap-8 w-full lg:w-auto nest-hub-images-row">
              {/* Small Image - Displayed in line for 1024px */}
              <div className="h-auto rounded-[16.54px] flex-shrink-0 hidden nest-hub-small-image-tablet">
                <img
                  src={image1}
                  alt="Image"
                  className="w-full h-full object-cover rounded-[16.54px]"
                />
              </div>
              
              {/* Medium Image */}
              <div className="h-auto rounded-[16.54px] flex-shrink-0 nest-hub-medium-image">
                <img
                  src={image2}
                  alt="Image"
                  className="w-full h-full object-cover rounded-[16.54px]"
                />
              </div>

              {/* Large Image */}
              <div className="relative h-auto rounded-[16.54px] flex-shrink-0 nest-hub-large-image">
                {/* White dots placeholder */}
                <div className="absolute -top-6 -right-4 w-[60px] h-[50px] lg:w-[103px] lg:h-[84px] rounded z-0 pointer-events-none select-none">
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
        source={modalSource}
      />
    </>
  );
};

export default HeroSection;
