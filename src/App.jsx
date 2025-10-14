import { useState } from "react";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import AboutUs from "./sections/AboutUs";
import BusinessCredit from "./sections/BusinessCredit";
import CustomerRetention from "./sections/CustomerRetention";
import FlexibleApproach from "./sections/FlexibleApproach";
import GrowthMatrix from "./sections/GrowthMatrix";
import HeroSection from "./sections/HeroSection";
import NextStep from "./sections/NextStep";
import Reputation from "./sections/Reputation";
import YouthProgram from "./sections/YouthProgram";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("default");

  const openContactModal = (source = "default") => {
    setModalSource(source);
    setIsContactModalOpen(true);
  };
  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setModalSource("default");
  };

  return (
    <div className="overflow-hidden ">
      <HeroSection />
      <AboutUs />
      <GrowthMatrix />
      <BusinessCredit />
      <CustomerRetention />
      <Reputation />
      <FlexibleApproach/>
      <NextStep openContactModal={() => openContactModal("get-started")} />
      {/* <YouthProgram /> */}
      <Footer/>
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} source={modalSource} />
    </div>
  );
}

export default App;
