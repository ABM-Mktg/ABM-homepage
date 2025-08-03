document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    initializeFooterModals();
  }, 1000);
});

function initializeFooterModals() {
  const footerLinks = document.querySelectorAll('a[href="#"]');

  footerLinks.forEach(link => {
    const text = link.textContent.trim();

    if (text === 'TERMS OF USE') {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openTermsModal();
      });
    } else if (text === 'PRIVACY POLICY') {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openPrivacyModal();
      });
    } else if (text === 'COOKIES') {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openCookiesModal();
      });
    }
  });
}

// Create modal HTML
function createModalHTML(id, title, content) {
  return `
        <div class="modal-overlay" id="${id}">
            <div class="modal">
                <div class="close-modal-sticky">
                    <button class="modal-close" id="close${id}">
                        <img src="./assets/close-modal.svg" alt="close modal">
                    </button>
                </div>
                <div class="modal-header terms-header">
                    <h2>${title}</h2>
                </div>
                <div class="modal-content">
                    ${content}
                </div>
            </div>
        </div>
    `;
}

// Terms of Use Modal
function openTermsModal() {
  const modalId = 'termsModal';
  const modalHTML = createModalHTML(modalId, 'Terms Of Use', `
      <div class="terms-content">
                <div class="terms-section">
                    <h3><span>1.</span> Acceptance of Terms</h3>
                    <p>By accessing and using this website ("Site"), you accept and agree to be bound by the terms and
                        provision of this agreement. These Terms of Use govern your use of our website and services. If
                        you do not agree to abide by the above, please do not use this service.</p>
                </div>

                <div class="terms-section">
                    <h3><span>2.</span> Description Of Service</h3>
                    <p>We provide a menu of professional services for both businesses and non profit organizations as
                        detailed on our site. Our services may include content, communications, software, and other
                        services provided to you through our website.</p>
                </div>

                <div class="terms-section terms-section-list">
                    <h3><span>3.</span> User Responsibilities</h3>
                    <h4 class="terms-section-list-heading">You agree to use our website only for lawful purposes and in
                        accordance with these Terms. You agree not to:</h3>
                        <ul class="terms-list">
                            <li>Use the site in any way that violates applicable federal, state, local, or international
                                law.</li>
                            <li>Transmit or procure the sending of any advertising or promotional material.</li>
                            <li>Impersonate or attempt to impersonate the company, employees, or other users.</li>
                            <li>Engage in any conduct that restricts or inhibits anyone's use of the website.</li>
                            <li>Use any automated system to access the website</li>
                        </ul>
                </div>

                <div class="terms-section">
                    <h3><span>4.</span> Intellectual Property Rights</h3>
                    <p>The website and its original content, features, and functionality are and will remain the
                        exclusive property of Applied Branding & Marketing, LLC and its licensors. The website is
                        protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be
                        used in connection with any product or service without our prior written consent.</p>
                </div>

                <div class="terms-section">
                    <h3><span>5.</span> User Content</h3>
                    <p>Our service may allow you to post, link, store, share and otherwise make available certain
                        information, text, graphics, videos, or other material. You are responsible for the content that
                        you post to the service, including its legality, reliability, and appropriateness.</p>
                </div>

                <div class="terms-section">
                    <h3><span>6.</span> Privacy Policy</h3>
                    <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of
                        our website, to understand our practices.</p>
                </div>

                <div class="terms-section terms-section-list">
                    <h3><span>7.</span> Disclaimers</h3>
                    <h4 class="disclaimer-bold terms-section-list-heading">THE INFORMATION ON THIS WEBSITE IS PROVIDED
                        ON AN "AS IS" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, THIS COMPANY:</h4>
                    <ul class="terms-list">
                        <li>EXCLUDES ALL REPRESENTATIONS AND WARRANTIES RELATING TO THIS WEBSITE AND ITS CONTENTS</li>
                        <li>EXCLUDES ALL LIABILITY FOR DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THIS
                            WEBSITE</li>
                    </ul>
                </div>

                <div class="terms-section">
                    <h3><span>8.</span> Limitation Of Liability</h3>
                    <p>In no event shall ABM, LLC nor its directors, employees, partners, agents, suppliers, or
                        affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                        including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                        resulting from your use of the service.</p>
                </div>

                <div class="terms-section">
                    <h3><span>9.</span> Termination</h3>
                    <p>We may terminate or suspend your account and bar access to the service immediately, without prior
                        notice or liability, under our sole discretion, for any reason whatsoever including without
                        limitation if you breach the Terms.</p>
                </div>

                <div class="terms-section">
                    <h3><span>10.</span> Governing Law</h3>
                    <p>These Terms shall be interpreted and governed by the laws of the State of WY, United States,
                        without regard to conflict of law provisions.</p>
                </div>

                <div class="terms-section">
                    <h3><span>11.</span> Changes To Terms</h3>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                        revision is material, we will provide at least 30 days notice prior to any new terms taking
                        effect.</p>
                </div>

                <div class="terms-section" style="border: none; margin-bottom: 0px;">
                    <h3><span>12.</span> Questions About Our Policies?</h3>
                    <p>If you have any questions about these Terms of Use, Privacy Policy, or Cookie Policy, please
                        contact us:</p>
                    <h2 class="contact-details">Contact Details</h2>
                    <h2 class="company"><b>Company:</b> ABM, LLC</h2>
                    <h2 class="email"><b>Email:</b> legal@abmize.com</h2>
                </div>
            </div>
     
    
    `);

  showModal(modalId, modalHTML);
}

// Privacy Policy Modal
function openPrivacyModal() {
  const modalId = 'privacyModal';
  const modalHTML = createModalHTML(modalId, 'Privacy Policy', `
        <div class="terms-content">
                <h4 class="last-update"><b>Last Updated:</b> July 2, 2025</h4>
                <div class="terms-section" style="margin-bottom: 0px; border: none;">
                    <h3><span>1.</span> Information We Collect</h3>
                    <div class="card-privay">
                        <h5>Personal Information</h5>
                        <div class="personal-info-card">
                            <div>
                                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                                <ul class="privacy-list">
                                    <li>Register for an account</li>
                                    <li>Subscribe to our newsletter</li>
                                    <li>Contact us through our website</li>
                                    <li>Participate in surveys or promotions</li>
                                    <li>Make a purchase or transaction</li>
                                </ul>
                            </div>
                            <div>
                                <p>This information may include:</p>
                                <ul class="privacy-list">
                                    <li>Name, email address, phone number</li>
                                    <li>Billing and shipping addresses</li>
                                    <li>Payment information (processed securely through third-party providers)</li>
                                    <li>Demographic information</li>
                                    <li>Any other information you choose to provide</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="card-privay">
                        <h5>Automatically Collected Information</h5>
                        <p class="automatically-collected-info-para">When you visit our website, we automatically
                            collect certain information about your device and usage:</p>
                        <ul class="privacy-list">
                            <li>IP address and browser type</li>
                            <li>Operating system and device information</li>
                            <li>Pages visited and time spent on our site</li>
                            <li>Referring website addresses</li>
                            <li>Search terms used to find our website</li>
                        </ul>
                    </div>
                </div>

                <div class="terms-section" style="margin-bottom: 0px; border: none;">
                    <h3><span>2.</span> How We Use Your Information</h3>
                    <h4 class="your-info-heading">We use the information we collect for various purposes, including:
                    </h4>
                    <ul class="privacy-list">
                        <li>Providing and maintaining our services</li>
                        <li>Processing transactions and sending related information</li>
                        <li>Sending administrative information and updates</li>
                        <li>Responding to your comments and questions</li>
                        <li>Improving our website and services</li>
                        <li>Personalizing your experience</li>
                        <li>Sending marketing communications (with your consent)</li>
                        <li>Detecting and preventing fraud</li>
                        <li>Complying with legal obligations</li>
                    </ul>
                </div>

                <div class="terms-section type-cookie-section-list">
                    <h3><span>3.</span> How We Share Your Information</h3>
                    <h4 class="share-your-info-heading">We do not sell, trade, or otherwise transfer your personal
                        information to third parties except in the following circumstances:</h4>
                    <div class="cookie-grid">
                        <div class="cookie-card">
                            <h4>Service Providers</h4>
                            <p>We may share your information with trusted third-party service providers who assist us in
                                operating our website, conducting business, or serving our users, provided they agree to
                                keep this information confidential.</p>
                        </div>
                        <div class="cookie-card">
                            <h4>Legal Requirements</h4>
                            <p>We may disclose your information when we believe release is appropriate to comply with
                                the law, enforce our site policies, or protect ours or others' rights, property, or
                                safety.</p>
                        </div>
                        <div class="cookie-card">
                            <h4>Business Transfers</h4>
                            <p>In the event of a merger, acquisition, or sale of assets, your information may be
                                transferred as part of that transaction.</p>
                        </div>
                    </div>
                </div>

                <div class="terms-section">
                    <h3><span>4.</span> Data Security</h3>
                    <p>We implement appropriate security measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                        over the internet or electronic storage is 100% secure.</p>
                </div>

                <div class="terms-section cookie-section-list">
                    <h3><span>5.</span> Your Rights and Choices</h3>
                    <h4 class="third-party-heading">Depending on your location, you may have certain rights regarding
                        your personal information:</h4>
                    <ul class="cookie-list">
                        <li><span>Access:</span> Request access to your personal information</li>
                        <li><span>Correction:</span> Request correction of inaccurate information</li>
                        <li><span>Deletion:</span> Request deletion of your personal information</li>
                        <li><span>Portability:</span> Request transfer of your information</li>
                        <li><span>Opt-out:</span> Unsubscribe from marketing communications</li>
                    </ul>
                </div>

                <div class="terms-section">
                    <h3><span>6.</span> Data Retention</h3>
                    <p>We retain your personal information only as long as necessary to fulfill the purposes for which
                        it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
                    </p>
                </div>

                <div class="terms-section">
                    <h3><span>7.</span> Children's Privacy</h3>
                    <p>Our services are not intended for children under 13 years of age. We do not knowingly collect
                        personal information from children under 13. If we discover we have collected information from a
                        child under 13, we will delete such information immediately.</p>
                </div>

                <div class="terms-section">
                    <h3><span>8.</span> International Transfers</h3>
                    <p>Your information may be transferred to and maintained on computers located outside of your state,
                        province, country, or other governmental jurisdiction where data protection laws may differ.</p>
                </div>

                <div class="terms-section">
                    <h3><span>9.</span> Third-Party Links</h3>
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy
                        practices or content of these external sites. We encourage you to review their privacy policies.
                    </p>
                </div>

                <div class="terms-section">
                    <h3><span>10.</span> California Privacy Rights</h3>
                    <p>If you are a California resident, you have additional rights under the California Consumer
                        Privacy Act (CCPA), including the right to know what personal information we collect, the right
                        to delete personal information, and the right to opt-out of the sale of personal information.
                    </p>
                </div>

                <div class="terms-section" style="border: none; margin-bottom: 0px;">
                    <h3><span>11.</span> Questions About Our Policies?</h3>
                    <p>If you have any questions about these Terms of Use, Privacy Policy, or Cookie Policy, please
                        contact us:</p>
                    <h2 class="contact-details">Contact Details</h2>
                    <h2 class="company"><b>Company:</b> ABM, LLC</h2>
                    <h2 class="email"><b>Email:</b> legal@abmize.com</h2>
                </div>

            </div>
    `);

  showModal(modalId, modalHTML);
}

// Cookies Modal
function openCookiesModal() {
  const modalId = 'cookieModal';
  const modalHTML = createModalHTML(modalId, 'Cookie Policy', `
          <div class="terms-content">
                <h4 class="last-update"><b>Last Updated:</b> July 2, 2025</h4>
                <div class="terms-section">
                    <h3><span>1.</span> What Are Cookies</h3>
                    <p>Cookies are small text files that are placed on your computer or mobile device when you visit a
                        website. They are widely used to make websites work more efficiently and provide information to
                        the owners of the site.</p>
                </div>

                <div class="terms-section type-cookie-section-list">
                    <h3><span>2.</span> Types Of Cookies We Use</h3>
                    <div class="cookie-grid">
                        <div class="cookie-card">
                            <h4>Essential Cookies</h4>
                            <p>These cookies are necessary for the website to function and cannot be switched off. They
                                are usually only set in response to actions made by you which amount to a request for
                                services, such as setting your privacy preferences, logging in, or filling in forms.</p>
                        </div>
                        <div class="cookie-card">
                            <h4>Analytics Cookies</h4>
                            <p>These cookies help us understand how visitors interact with our website by collecting and
                                reporting information anonymously. This helps us improve our website's performance and
                                user experience.</p>
                        </div>
                        <div class="cookie-card">
                            <h4>Functional Cookies</h4>
                            <p>These cookies enable the website to provide enhanced functionality and personalization.
                                They may be set by us or by third-party providers whose services we have added to our
                                pages.</p>
                        </div>
                        <div class="cookie-card">
                            <h4>Marketing Cookies</h4>
                            <p>These cookies may be set through our site by our advertising partners. They may be used
                                to build a profile of your interests and show you relevant adverts on other sites.</p>
                        </div>
                    </div>
                </div>

                <div class="terms-section cookie-section-list">
                    <h3><span>3.</span> Third-Party Cookies</h3>
                    <h4 class="third-party-heading">We may also use third-party services that place cookies on your
                        device, including:</h4>
                    <ul class="cookie-list">
                        <li><span>Google Analytics:</span> For website analytics and performance monitoring</li>
                        <li><span>Social Media Platforms:</span> For social sharing functionality</li>
                        <li><span>Advertising Networks:</span> For targeted advertising (if applicable)</li>
                    </ul>
                </div>

                <div class="terms-section type-cookie-section-list">
                    <h3><span>4.</span> Managing Cookies</h3>
                    <h4 class="managing-cookies-heading">You can control and manage cookies in various ways:</h4>
                    <div class="cookie-grid">
                        <div class="cookie-card">
                            <h4>Browser Settings</h4>
                            <p>Most web browsers allow you to control cookies through their settings preferences. You
                                can set your browser to refuse cookies or delete certain cookies. However, this may
                                affect the functionality of our website.</p>
                        </div>
                        <div class="cookie-card">
                            <h4>Opt-Out Links</h4>
                            <p>For analytics cookies, you can opt-out using these links:</p>
                            <h3>Google Analytics:
                                <a href="https://tools.google.com/dlpage/gaoptout"
                                    target="_blank">https://tools.google.com/dlpage/gaoptout</a>
                            </h3>
                        </div>
                        <div class="cookie-card">
                            <h4>Cookie Consent</h4>
                            <p>By continuing to use our website, you consent to our use of cookies as described in this
                                policy. You can withdraw your consent at any time by adjusting your browser settings or
                                contacting us.</p>
                        </div>
                    </div>
                </div>

                <div class="terms-section">
                    <h3><span>5.</span> Updates to Cookie Policy</h3>
                    <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
                        or our business practices. We encourage you to review this policy periodically.</p>
                </div>

                <div class="terms-section" style="border: none; margin-bottom: 0px;">
                    <h3><span>6.</span> Questions About Our Policies?</h3>
                    <p>If you have any questions about these Terms of Use, Privacy Policy, or Cookie Policy, please
                        contact us:</p>
                    <h2 class="contact-details">Contact Details</h2>
                    <h2 class="company"><b>Company:</b> ABM, LLC</h2>
                    <h2 class="email"><b>Email:</b> legal@abmize.com</h2>
                </div>

                <p class="resp-time"><b>Response Time:</b> We strive to respond to all inquiries within 72 hours /
                    business days.</p>
            </div>
    `);

  showModal(modalId, modalHTML);
}

// Show modal function
function showModal(modalId, modalHTML) {
  const existingModal = document.getElementById(modalId);
  if (existingModal) {
    existingModal.remove();
  }

  const scrollY = window.scrollY;
  document.body.style.top = `-${scrollY}px`;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(`close${modalId}`);

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';

  closeBtn.addEventListener('click', () => closeModal(modalId, scrollY));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modalId, scrollY);
    }
  });

  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) {
    modalContent.addEventListener('wheel', (e) => {
      e.stopPropagation();
    }, { passive: true });

    modalContent.addEventListener('touchstart', (e) => {
      e.stopPropagation();
    }, { passive: true });

    modalContent.addEventListener('touchmove', (e) => {
      e.stopPropagation();
    }, { passive: true });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal(modalId, scrollY);
    }
  });
}

function closeModal(modalId, scrollY) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';

    window.scrollTo(0, scrollY);

    setTimeout(() => {
      modal.remove();
    }, 10);
  }
}

// Add CSS for modals if not already present
function addModalCSS() {
  if (!document.getElementById('footer-modal-styles')) {
    const style = document.createElement('style');
    style.id = 'footer-modal-styles';
    style.textContent = `
        .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(5px);
}

.modal-overlay.active {
  display: flex;
}

.modal {
  background: white;
  border-radius: 30px;
  max-width: 1240px;
  width: 95%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  box-shadow: 0px 4px 30px 0px #d9305b99;
  position: relative;
  animation: modalSlideIn 0.3s ease-out;
   overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.modal::-webkit-scrollbar {
  width: 0px;
  display: none;
}

.modal::-webkit-scrollbar-track {
  background: transparent;
}

.modal::-webkit-scrollbar-thumb {
  background: transparent;
}

.modal::-webkit-scrollbar-thumb:hover {
  background: transparent;
}

.close-modal-sticky {
  width: 100%;
  background: white;
  z-index: 2;
  position: sticky;
  top: 0;
  right: 0;
  flex-shrink: 0;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  text-align: center;
  flex-shrink: 0;
}

.modal-header h2 {
  font-family: "Clash Display", sans-serif !important;
  font-size: 46px;
  font-weight: 600;
  color: #2d2d2d;
  margin-bottom: 10px;
}

/* Force font loading and application */
.modal-header h2,
.modal-header h2 * {
  font-family: "Clash Display", sans-serif !important;
}

.modal-header p {
  color: #666666;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}

.modal-close {
  position: absolute;
  top: 20px;
  background: white !important;
  right: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: transform 0.2s ease;
}

.modal-close:hover {
  transform: scale(1.1);
}

.modal-content {
  width: 100%;
  margin: auto;
  padding: 0px 20px 40px 20px;
  flex: 1;
}

.modal-content::-webkit-scrollbar {
  width: 0px;
  display: none;
}

.modal-content::-webkit-scrollbar-track {
  background: transparent;
}

.modal-content::-webkit-scrollbar-thumb {
  background: transparent;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: transparent;
}

@media (max-width: 1024px) {
  .modal-close {
    top: 10px;
    right: 10px;
  }

  .rewards-header h2 {
    font-size: 30px;
  }

  .rewards-header {
    padding: 70px 20px 25px 20px;
  }

  .modal-close img {
    background: white;
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
}


@media (max-width: 500px) {
  .modal-close img {
    width: 35px;
    height: 35px;
  }

  .modal-content {
    padding: 0px 14px 20px 14px;
  }
}

/* ========================================
   TERMS OF USE MODAL
   ======================================== */
.terms-header {
  padding: 81px 20px 71px 20px;
}

.terms-header h2 {
  color: #2d2d2d;
  font-size: 46px;
  font-weight: 700;
  line-height: 57px;
  margin-bottom: 0;
}

.terms-content {
  max-width: 1165px;
  margin: auto;
  width: 100%;
}

.terms-section {
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #cacaca;
}

.terms-section:last-child {
  padding-bottom: 0px;
  margin-bottom: 40px;
  border-bottom: 1px solid transparent;
}

.terms-section:last-child {
  margin-bottom: 0;
}

.terms-section h3 {
  font-size: 36px;
  line-height: 47px;
  font-family: "DM Sans", sans-serif !important;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 15px;
}

.terms-section h3 span {
  background: linear-gradient(180deg, #387858 0%, #d0d370 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* For Firefox */
  color: transparent;
  /* Fallback */
}

.terms-section p {
    font-family: "DM Sans", sans-serif !important;
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  color: #666666;
}

.terms-section p:last-child {
  margin-bottom: 0;
}

.terms-section-list {
  background: linear-gradient(
    180deg,
    rgba(56, 120, 88, 0.05) 0%,
    rgba(208, 211, 112, 0.05) 100%
  );
  padding: 20px;
  border-radius: 20px;
  border-bottom: none;
}

.terms-section-list-heading {
  font-size: 22px;
  line-height: 30px;
  color: #666666;
  font-family: "DM Sans", sans-serif !important;
  font-weight: 500;
}

.terms-list {
  list-style: none;
  padding-left: 0;
  margin: 15px 0px 0px 0px;
}

.terms-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
  color: #666666;
}

.terms-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 20px;
  height: 17.68px;
  background-image: url("/assets/arrow-checkbox.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
}

.terms-list li:last-child {
  margin-bottom: 0;
}

.disclaimer-bold {
  font-weight: 700 !important;
  color: #2d2d2d !important;
}

@media (max-width: 1024px) {
  .terms-header {
    padding: 40px 20px 30px 20px;
  }
}

@media (max-width: 1024px) {
  .modal {
    border-radius: 20px;
  }

  .terms-header h2 {
    font-size: 26px;
    font-weight: 600;
    line-height: 26px;
  }

  .terms-section h3 {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  .terms-section p {
    font-size: 14px !important;
    line-height: 20px !important;
  }

  .terms-section {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .terms-section-list {
    padding: 12px;
    border-radius: 12px;
  }

  .terms-section-list-heading {
    font-size: 14px;
    line-height: 20px;
  }

  .terms-list li::before {
    width: 15px;
    top: 2px;
    height: 16.68px;
  }

  .terms-list li {
    padding-left: 20px;
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 20px;
  }

  .terms-list {
    margin: 10px 0px 0px 0px;
  }
}

/* ========================================
   COOKIE POLICY MODAL
   ======================================== */
.cookie-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.cookie-grid > *:nth-last-child(1):nth-child(odd) {
  grid-column: span 2;
}

.cookie-card {
  background: linear-gradient(
    180deg,
    rgba(56, 120, 88, 0.1) 0%,
    rgba(208, 211, 112, 0.1) 100%
  );
  border-radius: 20px;
  padding: 20px;
}

.cookie-card h4 {
  font-size: 26px;
  font-family: "DM Sans", sans-serif !important;
  font-weight: 700;
  background: linear-gradient(180deg, #387858 0%, #d0d370 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 15px;
  line-height: 30px;
}

.cookie-card p {
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  color: #666666;
  margin: 0;
}

.cookie-card h3 {
  margin-top: 15px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  color: #2d2d2d;
}

.cookie-card h3 a {
  font-weight: 500;
  color: #2d2d2d;
  font-size: 18px;
  line-height: 30px;
  text-decoration: underline;
  word-break: break-all;
}

.cookie-list {
  list-style: none;
  padding-left: 0;
  margin: 15px 0;
}

.cookie-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
  color: #666666;
}

.cookie-list li span {
  background: linear-gradient(180deg, #387858 0%, #d0d370 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 26px;
  line-height: 30px;
  font-weight: 700;
}

.managing-cookies-heading {
  color: #2d2d2d;
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 15px;
}

.cookie-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 17.68px;
  height: 17.68px;
  background-image: url("/assets/circle-gradient.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
}

.cookie-list li:last-child {
  margin-bottom: 0;
}

.cookie-section-list {
  background: linear-gradient(
    180deg,
    rgba(56, 120, 88, 0.05) 0%,
    rgba(208, 211, 112, 0.05) 100%
  );
  padding: 20px;
  border-radius: 20px;
  border: none;
}

.type-cookie-section-list {
  border: none;
  padding: 0px;
}

.third-party-heading {
  color: #2d2d2d;
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif !important;
}

.contact-details {
  margin: 12px 0px 14px 0px;
    font-family: "DM Sans", sans-serif !important;
  font-size: 22px !important;
  font-weight: 600;
  line-height: 22px !important;
}

.company {
  font-size: 18px;
  line-height: 18px !important;
    font-family: "DM Sans", sans-serif !important;
  font-weight: 400;
}

.email {
  margin-top: 14px;
  font-size: 18px;
  line-height: 18px;
    font-family: "DM Sans", sans-serif !important;
  font-weight: 400;
}

.resp-time {
  font-size: 20px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif !important;
}

/* ========================================
   PRIVACY POLICY MODAL
   ======================================== */

.card-privay {
  background: linear-gradient(
    180deg,
    rgba(56, 120, 88, 0.1) 0%,
    rgba(208, 211, 112, 0.1) 100%
  );
  padding: 20px;
  border-radius: 20px;
}

.card-privay h5 {
  color: #2d2d2d;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
}

.card-privay:last-child {
  margin-top: 20px;
}

.personal-info-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.personal-info-card > div p {
  font-weight: 500;
  color: #2d2d2d;
}

.share-your-info-heading {
  font-size: 18px;
  font-family: "DM Sans", sans-serif !important;
  line-height: 30px;
  margin-bottom: 15px;
  font-weight: 400;
  color: #666666;
}

.privacy-list {
  list-style: none;
  padding-left: 0;
  margin: 10px 0;
}

.automatically-collected-info-para {
  font-weight: 500 !important;
  color: #2d2d2d !important;
}

.privacy-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #666666;
}

.privacy-list li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 14px;
  height: 14px;
  background-image: url("/assets/circle-gradient.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
}

.privacy-list li:last-child {
  margin-bottom: 0;
}

.your-info-heading {
  font-size: 18px;
  line-height: 30px;
  color: #2d2d2d;
  font-weight: 500;
}

.info-detail {
  max-width: 538px;
  width: 100%;
  margin-top: 20px;
}

.info-detail-heading {
  color: #2d2d2d;
  font-size: 22px;
  line-height: 29px;
  font-weight: 700;
  margin-bottom: 10px;
}

.info-detail-para {
  color: #2d2d2d;
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
}

/* ========================================
   CONTACT INFORMATION MODAL
   ======================================== */
.contact-modal {
  max-width: 800px;
  max-height: 85vh;
  max-width: 700px;
  width: 90%;
  padding: 35px;
  border-radius: 18px;
  position: relative;
}

.contact-header {
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    135deg,
    rgba(208, 211, 112, 0.1) 0%,
    rgba(56, 120, 88, 0.1) 100%
  );
  border-radius: 15px;
  padding: 22px 28px;
  margin: -35px -35px 25px -35px;
}

.contact-header h2 {
  color: #d0d370;
  font-size: 26px;
  margin-bottom: 8px;
}

.contact-header p {
  color: #ffffff;
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 0;
}

.last-update {
  margin-bottom: 14px;
  font-size: 20px;
    font-family: "DM Sans", sans-serif !important;
  font-weight: 400;
}

.contact-content {
  max-width: 1140px;
  width: 100%;
  margin: auto;
  padding: 0px 0px 40px 0px;
  padding: 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.contact-card {
  background: linear-gradient(180deg, #d9305b 0%, #7e2784 100%);
  border-radius: 12px;
  padding: 25px;
  color: white;
}

.contact-card h3 {
  font-family: "Clash Display", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 24px;
}

.contact-info p {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 15px;
  color: white;
}

.email-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.email-item svg {
  flex-shrink: 0;
}

.email-item span {
  font-size: 14px;
  line-height: 20px;
  color: white;
  word-break: break-all;
}

.response-time {
  text-align: center;
  margin-top: 20px;
}

.response-time p {
  font-size: 14px;
  line-height: 20px;
  color: #666666;
  margin: 0;
}

/* ========================================
   PERSONAL INFORMATION MODAL
   ======================================== */
.personal-info-modal {
  max-width: 1200px;
  max-height: 90vh;
  box-shadow: 0px 0px 60px 30px #00000008;
  width: 95%;
  padding: 40px 20px;
  border-radius: 30px;
  overflow-y: scroll;
}

.per-info-modal-close {
  position: absolute;
  top: -20px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: white;
  transition: transform 0.2s ease;
}

.per-info-modal-close:hover {
  transform: scale(1.1);
}

.per-info-modal-close .close-modal-icon {
  width: 40px;
  background: white;
  height: 40px;
  border-radius: 100%;
}

.personal-info-layout {
  display: flex;
  max-width: 1100px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: auto;
}

.personal-info-image {
  max-width: 454px;
  width: 100%;
  height: -webkit-fill-available;
}

.personal-info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.personal-info-form {
  max-width: 595px;
  height: -webkit-fill-available;
  width: 100%;
  background: white;
}

.personal-info-form h1 {
  color: #2d2d2d;
  font-family: "DM Sans", sans-serif !important;
  font-size: 30px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 26px;
}

.info-form {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #2d2d2d;
}

.required {
  color: #ff0000;
  font-weight: 700;
}

.form-group input,
.form-group select {
  border: none;
  border-bottom: 2px solid #bdbdbd;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  padding: 8px 0 8px 0;
  font-size: 16px;
  color: #2d2d2d;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus {
  border-bottom: 2px solid #ff0000;
  outline: none;
  background: transparent;
}

.form-group input::placeholder {
  color: #8d8d8d;
  opacity: 1;
  font-size: 16px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #2d2d2d;
}

.form-group select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent url("assets/dropdown-arrow.svg") no-repeat right 0px
    center/14px;
  padding-right: 32px;
  cursor: pointer;
  color: #2d2d2d;
}

.form-group select:focus {
  background-color: transparent;
  border-bottom: 2px solid #d9305b;
}

.submit-btn {
  width: fit-content;
  cursor: pointer;
  font-family: "DM Sans", sans-serif !important;
  white-space: nowrap;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #d9305b 0%, #7e2784 100%);
  border: none;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border-radius: 999px;
  padding: 12px 10px 12px 30px;
  text-decoration: none;
  margin-top: 11px;
  box-shadow: 0 2px 8px rgba(56, 120, 88, 0.08);
  transition: background 0.5s, color 0.5s;
  position: relative;
}

.submit-btn:hover {
  background: linear-gradient(180deg, #387858 0%, #d0d370 100%);
  color: white;
}

.submit-btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #387858 0%, #d0d370 100%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 15px;
  color: #fff;
  transition: background 0.5s;
}

.submit-btn:hover .submit-btn-icon {
  background: linear-gradient(180deg, #d9305b 0%, #7e2784 100%);
  color: white;
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .personal-info-form {
    padding: 0 8px;
  }

  .personal-info-image {
    display: none;
  }

  .personal-info-modal {
    padding: 22px 10px;
    border-radius: 20px;
  }

  .per-info-modal-close {
    top: -10px;
  }

  .personal-info-form h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .submit-btn {
    padding: 9px 10px 9px 22px;
  }

  .submit-btn-icon {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 600px) {
  .personal-info-card {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .card-privay {
    padding: 16px;
    border-radius: 12px;
  }

  .card-privay h5 {
    margin-bottom: 6px;
    font-size: 15px;
    line-height: 20px;
  }

  .privacy-list {
    margin: 8px 0;
  }

  .privacy-list li {
    padding-left: 20px;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 20px;
  }

  .privacy-list li:before {
    top: 3px;
  }

  .card-privay:last-child {
    margin-top: 12px;
  }

  .your-info-heading {
    font-size: 14px;
    line-height: 20px;
  }

  .info-detail {
    margin-top: 8px;
  }

  .info-detail-heading {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 4px;
  }

  .info-detail-para {
    font-size: 14px;
    line-height: 20px;
  }

  .cookie-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .cookie-grid > *:nth-last-child(1):nth-child(odd) {
    grid-column: span 1;
  }

  .share-your-info-heading {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }

  .cookie-card {
    border-radius: 12px;
    padding: 12px;
  }

  .cookie-card h4 {
    font-size: 16px;
    margin-bottom: 4px;
    line-height: 24px;
  }

  .cookie-card p {
    font-size: 14px;
    line-height: 20px;
  }

  .third-party-heading {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  }

  .cookie-section-list {
    padding: 12px;
    border-radius: 12px;
  }

  .cookie-list {
    margin: 10px 0 0 0;
  }

  .cookie-list li {
    padding-left: 16px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
  }

  .cookie-list li::before {
    top: 3px;
    width: 13px;
    height: 13px;
  }

  .cookie-list li span {
    font-size: 16px;
    line-height: 16px;
  }

  .managing-cookies-heading {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .cookie-card h3 {
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  .cookie-card h3 a {
    font-size: 14px;
    line-height: 20px;
  }
}

@media (max-width: 1024px) {
  .rewards-btn-icon {
    width: 36px;
    height: 36px;
    margin-left: 10px;
  }

  .rewards-btn {
    font-size: 16px;
    padding: 6px 8px 6px 16px;
  }
}

@media (max-width: 600px) {
  .rewards-btn-icon {
    width: 36px;
    height: 36px;
    margin-left: 10px;
  }

  .rewards-btn {
    display: none;
  }

  .mobile-rewards-btn {
    display: flex;
    width: fit-content;
  }
}

        `;
    document.head.appendChild(style);
  }
}

// Initialize CSS
addModalCSS(); 