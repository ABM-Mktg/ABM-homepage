import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import './FooterModals.css';
import greenTick from '../assets/images/green-tick.svg';
import circleGradient from '../assets/images/circle-gradient.svg';

const FooterModals = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    openTerms: () => openTermsModal(),
    openPrivacy: () => openPrivacyModal(), 
    openCookies: () => openCookiesModal(),
  }));

  // Inject the original JavaScript functionality
  useEffect(() => {
    // Initialize the modal functions from the original footer-modals.js
    initializeModalFunctions();
  }, []);

  const initializeModalFunctions = () => {
    // Create modal HTML function
    window.createModalHTML = function(id, title, content) {
      return `
        <div class="modal-overlay" id="${id}">
          <div class="modal">
            <div class="close-modal-sticky">
              <button class="modal-close" id="close${id}">
                <img src="/src/assets/images/close-modal.svg" alt="close modal">
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
    };

    // Show modal function
    window.showModal = function(modalId, modalHTML) {
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

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          closeModal(modalId, scrollY);
        }
      });
    };

    // Close modal function
    window.closeModal = function(modalId, scrollY) {
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
    };

    // Terms of Use Modal
    window.openTermsModal = function() {
      const modalId = 'termsModal';
      const modalHTML = window.createModalHTML(modalId, 'Terms Of Use', `
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
              accordance with these Terms. You agree not to:</h4>
            <ul class="terms-list">
              <li class="with-green-tick">
                <img src="${greenTick}" alt="green tick" style="width: 20px; height: 20px; margin-right: 10px; flex-shrink: 0;" />
                Use the site in any way that violates applicable federal, state, local, or international law.
              </li>
              <li class="with-green-tick">
                <img src="${greenTick}" alt="green tick" style="width: 20px; height: 20px; margin-right: 10px; flex-shrink: 0;" />
                Transmit or procure the sending of any advertising or promotional material.
              </li>
              <li class="with-green-tick">
                <img src="${greenTick}" alt="green tick" style="width: 20px; height: 20px; margin-right: 10px; flex-shrink: 0;" />
                Impersonate or attempt to impersonate the company, employees, or other users.
              </li>
              <li class="with-green-tick">
                <img src="${greenTick}" alt="green tick" style="width: 20px; height: 20px; margin-right: 10px; flex-shrink: 0;" />
                Engage in any conduct that restricts or inhibits anyone's use of the website.
              </li>
              <li class="with-green-tick">
                <img src="${greenTick}" alt="green tick" style="width: 20px; height: 20px; margin-right: 10px; flex-shrink: 0;" />
                Use any automated system to access the website
              </li>
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
              <li class="with-green-tick">
                <img src="${greenTick}" alt="green tick" style="width: 20px; height: 20px; margin-right: 10px; flex-shrink: 0;" />
                EXCLUDES ALL REPRESENTATIONS AND WARRANTIES RELATING TO THIS WEBSITE AND ITS CONTENTS
              </li>
              <li class="with-green-tick">
                <img src="${greenTick}" alt="green tick" style="width: 20px; height: 20px; margin-right: 10px; flex-shrink: 0;" />
                EXCLUDES ALL LIABILITY FOR DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THIS
                WEBSITE
              </li>
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

      window.showModal(modalId, modalHTML);
    };

    // Privacy Policy Modal
    window.openPrivacyModal = function() {
      const modalId = 'privacyModal';
      const modalHTML = window.createModalHTML(modalId, 'Privacy Policy', `
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
            <h4 class="your-info-heading">We use the information we collect for various purposes, including:</h4>
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
            <ul class="cookie-list rights-choices-list">
              <li class="rights-choice-item with-circle-gradient">
                <img src="${circleGradient}" alt="circle gradient" style="width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0;" />
                <span>Access:</span> Request access to your personal information
              </li>
              <li class="rights-choice-item with-circle-gradient">
                <img src="${circleGradient}" alt="circle gradient" style="width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0;" />
                <span>Correction:</span> Request correction of inaccurate information
              </li>
              <li class="rights-choice-item with-circle-gradient">
                <img src="${circleGradient}" alt="circle gradient" style="width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0;" />
                <span>Deletion:</span> Request deletion of your personal information
              </li>
              <li class="rights-choice-item with-circle-gradient">
                <img src="${circleGradient}" alt="circle gradient" style="width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0;" />
                <span>Portability:</span> Request transfer of your information
              </li>
              <li class="rights-choice-item with-circle-gradient">
                <img src="${circleGradient}" alt="circle gradient" style="width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0;" />
                <span>Opt-out:</span> Unsubscribe from marketing communications
              </li>
            </ul>
          </div>

          <div class="terms-section">
            <h3><span>6.</span> Data Retention</h3>
            <p>We retain your personal information only as long as necessary to fulfill the purposes for which
              it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
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
              practices or content of these external sites. We encourage you to review their privacy policies.</p>
          </div>

          <div class="terms-section">
            <h3><span>10.</span> California Privacy Rights</h3>
            <p>If you are a California resident, you have additional rights under the California Consumer
              Privacy Act (CCPA), including the right to know what personal information we collect, the right
              to delete personal information, and the right to opt-out of the sale of personal information.</p>
          </div>

          <div class="terms-section" style="border: none; margin-bottom: 0px;">
            <h3><span>11.</span> Questions About Our Policies?</h3>
            <p>If you have any questions about these Terms of Use, Privacy Policy, or Cookie Policy, please
              contact us:</p>
            <h2 class="contact-details">Contact Details</h2>
            <h2 class="company"><b>Company:</b> ABM, LLC</h2>
            <h2 class="email"><b>Email:</b> legal@abmize.com</h2>
            <h2 class="email"><b>Call Us:</b> <a href="tel:8777217447" class="call-me">(877) 721-7447</a></h2>
          </div>
        </div>
      `);

      window.showModal(modalId, modalHTML);
    };

    // Cookies Modal
    window.openCookiesModal = function() {
      const modalId = 'cookieModal';
      const modalHTML = window.createModalHTML(modalId, 'Cookie Policy', `
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
              <li class="with-circle-gradient">
                <img src="${circleGradient}" alt="circle gradient" style="width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0;" />
                <span>Google Analytics:</span> For website analytics and performance monitoring
              </li>
              <li class="with-circle-gradient">
                <img src="${circleGradient}" alt="circle gradient" style="width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0;" />
                <span>Social Media Platforms:</span> For social sharing functionality
              </li>
              <li class="with-circle-gradient">
                <img src="${circleGradient}" alt="circle gradient" style="width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0;" />
                <span>Advertising Networks:</span> For targeted advertising (if applicable)
              </li>
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
            <h2 class="email"><b>Call Us:</b> <a href="tel:8777217447" class="call-me">(877) 721-7447</a></h2>
          </div>

          <p class="resp-time"><b>Response Time:</b> We strive to respond to all inquiries within 72 hours /
            business days.</p>
        </div>
      `);

      window.showModal(modalId, modalHTML);
    };
  };

  return null; // This component doesn't render anything visible
});

FooterModals.displayName = 'FooterModals';

export default FooterModals;
