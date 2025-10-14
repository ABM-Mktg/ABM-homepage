import { useRef, useState } from "react";
// Import PrivacyPolicyModal if not already imported
import FooterModals from "./FooterModalsNew";
import closeModal from "../assets/images/close-modal.svg";
import businessImage from "../assets/images/contact.svg"; // Using an existing business image
import call from "../assets/images/call-black.png";

const ContactModal = ({ isOpen, onClose, source = "default" }) => {
  const modalsRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    organizationName: "",
    consultationType: "phone",
    serviceType: [], // Changed to array for multiple selections
    message: "",
    smsConsent: "", // <-- automatically selected
  });

 const handleClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      organizationName: "",
      consultationType: "phone",
      serviceType: [], // Reset to empty array
      message: "",
      smsConsent: "", // Keep consent selected on reset
    });
    onClose();
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errorMessage, setErrorMessage] = useState(null);

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    modalsRef.current?.openPrivacy();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "serviceType") {
      // Handle multiple service selection with radio button styling
      setFormData((prev) => ({
        ...prev,
        serviceType: prev.serviceType.includes(value)
          ? prev.serviceType.filter((service) => service !== value) // Remove if already selected
          : [...prev.serviceType, value], // Add if not selected
      }));
    } else if (name === "smsConsent") {
      // Handle SMS consent toggle behavior
      setFormData((prev) => ({
        ...prev,
        [name]: prev[name] === value ? "" : value, // Toggle: if already selected, deselect; otherwise select
      }));

      // Clear error message when SMS consent is selected, set it when deselected
      if (formData.smsConsent === value) {
        // If clicking the same value (deselecting), don't clear error immediately
      } else {
        // If selecting, clear error
        setErrorMessage(null);
      }
    } else {
      // Handle other form fields normally
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if SMS consent is selected
    if (!formData.smsConsent) {
      setErrorMessage("Please agree to receive messages from ABM to continue.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if access key is available
      const accessKey = "bcb0d141-4746-497f-8a56-ce72459aec71";
      // console.log("key", accessKey)
      // if (!accessKey) {
      //   console.error(
      //     "Web3Forms access key not found. Please check your .env file."
      //   );
      //   setSubmitStatus("error");
      //   return;
      // }

      // Prepare data for Web3Forms API (same as ABM homepage)
      const submissionData = {
        "First Name": formData.firstName,
        "Last Name": formData.lastName,
        Email: formData.email,
        "Phone Number": formData.phoneNumber,
        "Organization Name": formData.organizationName,
        "Consultation Type": formData.consultationType,
        "Selected Services":
          formData.serviceType.length > 0
            ? formData.serviceType.join(", ")
            : "None selected",
        "SMS Consent": formData.smsConsent, // <-- added
        Message: formData.message,
        access_key: accessKey,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          organizationName: "",
          consultationType: "phone",
          serviceType: [], // Reset to empty array
          message: "",
          smsConsent: "", // Keep consent selected on reset
        });
        // Close modal after a brief success message
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 animate-fadeIn"
      style={{ zIndex: 999999 }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-[90%] md:max-w-[60%] w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp contact-modal-container"
        style={{ zIndex: 1000000 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex">
          {/* Left side - Image */}
          <div className="contact-modal-image w-1/2 rounded-l-2xl p-0 flex-shrink-0 relative overflow-hidden">
            <div className="h-full flex flex-col items-center justify-between p-8">
              {/* Business image area */}
              <div className="flex-1 flex items-center justify-center relative">
                <div className="relative overflow-hidden">
                  {/* Professional business image */}
                  <img
                    src={businessImage}
                    alt="Business Growth"
                    // className="w-48 h-56 object-cover"
                  />
                </div>
              </div>

              {/* Phone number at bottom */}
              <div className="w-[80%] mt-6">
                <div className="flex items-center  rounded-2xl px-6 py-3 border border-gradient-to-r from-[#DE5FCB] to-[#DED65F]">
                  <img src={call} className="w-[22px] h-[22px]" />
                  <span className="text-lg font-medium pl-3">
                    (877) 721-7447
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="contact-modal-form w-full xl:w-1/2 p-8">
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={()=> handleClose()}
                className="modal-close"
                aria-label="Close modal"
                type="button"
              >
                <img
                  src={closeModal}
                  alt="close modal"
                  style={{ width: "24px", height: "24px" }}
                />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[16px] font-medium text-gray-700 font-dm  mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[16px] font-medium text-gray-700 mb-1 font-dm"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[16px] font-medium text-gray-700 mb-1 font-dm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-[16px] font-medium text-gray-700 mb-1 font-dm"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                    required
                  />
                </div>
              </div>

              {/* Organization Name */}
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-[16px] font-medium text-gray-700 mb-1 font-dm"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                />
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-[20px] font-medium mb-3 font-clash">
                  Select Consultation?
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="consultationType"
                      value="phone"
                      checked={formData.consultationType === "phone"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        formData.consultationType === "phone"
                          ? "bg-black border-black"
                          : "bg-gray-300 border-gray-300"
                      }`}
                    >
                      {formData.consultationType === "phone" && (
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 4.5L4.5 8L11 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="ml-2 text-[14px]  font-dm">
                      Phone Consultation
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="consultationType"
                      value="email"
                      checked={formData.consultationType === "email"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        formData.consultationType === "email"
                          ? "bg-black border-black"
                          : "bg-gray-300 border-gray-300"
                      }`}
                    >
                      {formData.consultationType === "email" && (
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 4.5L4.5 8L11 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="ml-2 text-[14px]  font-dm">
                      Email Consultation
                    </span>
                  </label>
                </div>
              </div>

              {/* Service Selection - Only shown for Get Started buttons */}
              {source === "get-started" && (
                <div>
                  <label className="block text-[20px] font-medium mb-3 font-clash">
                    Select Service?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="button"
                        name="serviceType"
                        value="Digital Marketing"
                        onClick={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.serviceType.includes("Digital Marketing")
                            ? "bg-black border-black"
                            : "bg-gray-300 border-gray-300"
                        }`}
                      >
                        {formData.serviceType.includes("Digital Marketing") && (
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4.5L4.5 8L11 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="ml-2 text-[14px] font-dm">
                        Digital Marketing
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="button"
                        name="serviceType"
                        value="Business Credit Growth"
                        onClick={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.serviceType.includes(
                            "Business Credit Growth"
                          )
                            ? "bg-black border-black"
                            : "bg-gray-300 border-gray-300"
                        }`}
                      >
                        {formData.serviceType.includes(
                          "Business Credit Growth"
                        ) && (
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4.5L4.5 8L11 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="ml-2 text-[14px] font-dm">
                        Business Credit Growth
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="button"
                        name="serviceType"
                        value="Reputation Management"
                        onClick={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.serviceType.includes("Reputation Management")
                            ? "bg-black border-black"
                            : "bg-gray-300 border-gray-300"
                        }`}
                      >
                        {formData.serviceType.includes(
                          "Reputation Management"
                        ) && (
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4.5L4.5 8L11 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="ml-2 text-[14px] font-dm">
                        Reputation Management
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="button"
                        name="serviceType"
                        value="Fundraising Growth"
                        onClick={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.serviceType.includes("Fundraising Growth")
                            ? "bg-black border-black"
                            : "bg-gray-300 border-gray-300"
                        }`}
                      >
                        {formData.serviceType.includes(
                          "Fundraising Growth"
                        ) && (
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4.5L4.5 8L11 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="ml-2 text-[14px] font-dm">
                        Fundraising Growth
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer col-span-1 sm:col-span-2">
                      <input
                        type="button"
                        name="serviceType"
                        value="Youth Business Programs"
                        onClick={handleInputChange}
                        className="sr-only"
                      />
                      {/* <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.serviceType === "Youth Business Programs"
                            ? "bg-black border-black"
                            : "bg-gray-300 border-gray-300"
                        }`}
                      >
                        {formData.serviceType === "Youth Business Programs" && (
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4.5L4.5 8L11 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="ml-2 text-[14px] font-dm">
                        Youth Business Programs
                      </span> */}
                    </label>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[16px] font-medium font-dm mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={1}
                  maxLength={500} // <-- added
                  className="w-full px-3 py-2 border-b border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent resize-none"
                  placeholder=""
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              {/* Privacy Policy Section (above Send Message button) */}
              <div>
                <div
                  role="radiogroup"
                  aria-label="SMS consent"
                  className="flex flex-col gap-2"
                >
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="smsConsent"
                      value="full_consent"
                      checked={formData.smsConsent === "full_consent"}
                      onChange={handleInputChange}
                      className="peer sr-only"
                    />

                    <span
                      className="
        inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center
        rounded-[5px] border border-[#666666]
        peer-checked:bg-[#cd2f60] peer-checked:border-[#cd2f60]
        peer-checked:after:content-['✓'] peer-checked:after:text-white
        peer-checked:after:text-[12px] peer-checked:after:leading-[1]
      "
                      aria-hidden="true"
                    />

                    <div className="text-[14px] font-dm text-[#666666] font-normal leading-snug">
                      <p>
                        I agree to receive text messages from ABM sent from
                        (877)721-7447.
                      </p>
                      <p className="text-[12px]">
                        Message frequency varies and may include links for
                        requested information, appointment reminders, service
                        updates, order information, promotional messages, etc.
                      </p>
                      <p className="text-[12px]">
                        Message and data rates may apply per your provider.
                      </p>
                      <p className="text-[12px] mt-2">
                        Reply <b>STOP</b> at any time to end or{" "}
                        <b>unsubscribe</b>.
                      </p>
                      <p className="text-[12px]">
                        For assistance reply <b>HELP</b> or contact support.
                      </p>
                    </div>
                  </label>

                  {/* <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="smsConsent"
                      value="partial_consent"
                      checked={formData.smsConsent === "partial_consent"}
                      onChange={handleInputChange}
                      className="peer sr-only"
                    />

                    <span
                      className="
        inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center
        rounded-[5px] border border-[#666666]
        peer-checked:bg-[#cd2f60] peer-checked:border-[#cd2f60]
        peer-checked:after:content-['✓'] peer-checked:after:text-white
        peer-checked:after:text-[12px] peer-checked:after:leading-[1]
      "
                      aria-hidden="true"
                    />

                    <div className="text-[14px] font-dm text-[#666666] font-normal leading-snug">
                      <p>
                        I agree to receive the above types of messages from ABM
                        sent from (877)721-7447
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="smsConsent"
                      value="no_consent"
                      checked={formData.smsConsent === "no_consent"}
                      onChange={handleInputChange}
                      className="peer sr-only"
                    />

                    <span
                      className="
        inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center
        rounded-[5px] border border-[#666666]
        peer-checked:bg-[#cd2f60] peer-checked:border-[#cd2f60]
        peer-checked:after:content-['✓'] peer-checked:after:text-white
        peer-checked:after:text-[12px] peer-checked:after:leading-[1]
      "
                      aria-hidden="true"
                    />

                    <div className="text-[14px] font-dm text-[#666666] font-normal leading-snug">
                      <p>
                        No, I do not want to receive text messages from ABM.
                      </p>
                    </div>
                  </label> */}

                  <span className="text-[14px] mt-2 font-dm text-[#666666]">
                    See our{" "}
                    <button
                      type="button"
                      className="text-[#11A9F5] underline hover:text-[#11A9F5]"
                      onClick={handlePrivacyClick}
                    >
                      Privacy Policy
                    </button>{" "}
                    for details on how we handle your information.
                  </span>
                </div>
              </div>
              <p className="text-red-700">{errorMessage}</p>
              {/* Submit Button */}
              <div className="mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`font-nunito py-3 px-6 rounded-full transition-colors duration-200 -mt-4 font-semibold ${
                    isSubmitting
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : submitStatus === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#68EF78] hover:bg-green-400 text-gray-800"
                  }`}
                >
                  {isSubmitting
                    ? "Sending..."
                    : submitStatus === "success"
                    ? "Message Sent!"
                    : submitStatus === "error"
                    ? "Failed to Send"
                    : "Send Message"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-green-600 text-sm mt-2">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-sm mt-2">
                    Sorry, there was an error sending your message. Please try
                    again.
                  </p>
                )}
              </div>
            </form>

            {/* Mobile phone number display */}
            <div className="md:hidden mt-6">
              <div className="flex items-center  rounded-2xl px-6 py-3">
                <img src={call} className="w-[22px] h-[22px]" />
                <span className="text-lg font-medium pl-3">(877) 721-7447</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Modals for Privacy Policy */}
      <FooterModals ref={modalsRef} />
    </div>
  );
};

export default ContactModal;
