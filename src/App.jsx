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

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="overflow-hidden ">
      <HeroSection />
      <AboutUs />
      <GrowthMatrix />
      <BusinessCredit />
      <CustomerRetention />
      <Reputation />
      <FlexibleApproach/>
      <NextStep openContactModal={openContactModal} />
      <YouthProgram openContactModal={openContactModal} />
      <Footer/>
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;
