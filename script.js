document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu
    const hamburger = document.querySelector('.navbar-hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

    function openMenu() {
        mobileMenu.classList.add('open');
        mobileMenuBackdrop.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.classList.remove('open');
        mobileMenuBackdrop.style.display = 'none';
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);
    mobileMenuBackdrop.addEventListener('click', closeMenu);

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    const mobileRewardsBtn = document.querySelector('.mobile-rewards-btn');
    if (mobileRewardsBtn) {
        mobileRewardsBtn.addEventListener('click', function() {
            closeMenu();
            openModal();
        });
    }

    // Modal
    const rewardsBtn = document.querySelector('.rewards-btn');
    const modal = document.getElementById('rewardsModal');
    const closeModal = document.getElementById('closeModal');

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (rewardsBtn) {
        rewardsBtn.addEventListener('click', openModal);
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunc();
        }
    });

    const termsBtn = document.querySelector('.footer-link button');
    const termsModal = document.getElementById('termsModal');
    const closeTermsModal = document.getElementById('closeTermsModal');

    function openTermsModal() {
        termsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeTermsModalFunc() {
        termsModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (termsBtn) {
        termsBtn.addEventListener('click', openTermsModal);
    }

    if (closeTermsModal) {
        closeTermsModal.addEventListener('click', closeTermsModalFunc);
    }

    if (termsModal) {
        termsModal.addEventListener('click', function(e) {
            if (e.target === termsModal) {
                closeTermsModalFunc();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && termsModal.classList.contains('active')) {
            closeTermsModalFunc();
        }
    });

    const cookieBtn = Array.from(document.querySelectorAll('.footer-link button')).find(btn => btn.textContent.trim() === 'Cookies');
    const cookieModal = document.getElementById('cookieModal');
    const closeCookieModal = document.getElementById('closeCookieModal');

    function openCookieModal() {
        cookieModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCookieModalFunc() {
        cookieModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (cookieBtn) {
        cookieBtn.addEventListener('click', openCookieModal);
    }

    if (closeCookieModal) {
        closeCookieModal.addEventListener('click', closeCookieModalFunc);
    }

    if (cookieModal) {
        cookieModal.addEventListener('click', function(e) {
            if (e.target === cookieModal) {
                closeCookieModalFunc();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cookieModal.classList.contains('active')) {
            closeCookieModalFunc();
        }
    });

    const privacyBtn = Array.from(document.querySelectorAll('.footer-link button')).find(btn => btn.textContent.trim() === 'Privay Policy');
    const privacyModal = document.getElementById('privacyModal');
    const closePrivacyModal = document.getElementById('closePrivacyModal');

    function openPrivacyModal() {
        privacyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePrivacyModalFunc() {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (privacyBtn) {
        privacyBtn.addEventListener('click', openPrivacyModal);
    }

    if (closePrivacyModal) {
        closePrivacyModal.addEventListener('click', closePrivacyModalFunc);
    }

    if (privacyModal) {
        privacyModal.addEventListener('click', function(e) {
            if (e.target === privacyModal) {
                closePrivacyModalFunc();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
            closePrivacyModalFunc();
        }
    });

    const getStartedBtn = document.querySelector('.hero-btn');
    const applyNowBtn = document.querySelector('.apply-now-btn');
    const personalInfoModal = document.getElementById('personalInfoModal');
    const closePersonalInfoModal = document.getElementById('closePersonalInfoModal');
    const personalInfoForm = document.querySelector('.info-form');

    function openPersonalInfoModal() {
        personalInfoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePersonalInfoModalFunc() {
        personalInfoModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', openPersonalInfoModal);
    }
    if (applyNowBtn) {
        applyNowBtn.addEventListener('click', openPersonalInfoModal);
    }

    if (closePersonalInfoModal) {
        closePersonalInfoModal.addEventListener('click', closePersonalInfoModalFunc);
    }

    if (personalInfoModal) {
        personalInfoModal.addEventListener('click', function(e) {
            if (e.target === personalInfoModal) {
                closePersonalInfoModalFunc();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && personalInfoModal.classList.contains('active')) {
            closePersonalInfoModalFunc();
        }
    });

    if (personalInfoForm) {
        personalInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(personalInfoForm);
            const data = Object.fromEntries(formData);
            
            console.log('Form submitted:', data);
            
            alert('Thank you! Your information has been submitted successfully.');
            
            closePersonalInfoModalFunc();
            
            personalInfoForm.reset();
        });
    }

    const persInfoModalClose = document.getElementById('pers-info-modal');
    if (persInfoModalClose) {
        persInfoModalClose.addEventListener('click', closePersonalInfoModalFunc);
    }

});
