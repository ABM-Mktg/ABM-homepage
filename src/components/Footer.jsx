import React, { useRef } from 'react';
import FooterModals from './FooterModalsNew';

function Footer(props) {
    const modalsRef = useRef();

    const handleTermsClick = (e) => {
        e.preventDefault();
        modalsRef.current?.openTerms();
    };

    const handlePrivacyClick = (e) => {
        e.preventDefault();
        modalsRef.current?.openPrivacy();
    };

    const handleCookiesClick = (e) => {
        e.preventDefault();
        modalsRef.current?.openCookies();
    };

    return (
        <>
            <footer className="bg-gradient-to-b from-[#D9305B] to-[#7E2784] text-white h-[78px] flex items-center justify-center mb-0">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center space-x-8 text-[18px] font-dm font-normal">
                        <a href="#" onClick={handleTermsClick} className="hover:text-gray-300 transition-colors">
                            Terms of Use
                        </a>
                        <span>
                            ABM LLC 2017
                        </span>
                        <a href="#" onClick={handlePrivacyClick} className="hover:text-gray-300 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" onClick={handleCookiesClick} className="hover:text-gray-300 transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>
            </footer>
            <FooterModals ref={modalsRef} />
        </>
    );
}

export default Footer;