import React, { useState, useEffect, useCallback } from 'react';
import * as styles from './SalesTalentPopup.module.scss';

const DELAY = 2000;
const STORAGE_KEY = 'hf_registered_2026';
const LOGO_URL = 'https://beige-oyster-766501.hostingersite.com/hf-popup/assets/logo.png';

const SalesTalentPopup = () => {
  const [isActive, setIsActive] = useState(false);

  const openPopup = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY) === '1') return;
    setIsActive(true);
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
  }, []);

  const closePopup = useCallback(() => {
    setIsActive(false);
    document.body.style.overflowX = '';
    document.body.style.overflowY = '';
  }, []);

  // Auto-trigger after delay
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const timer = setTimeout(openPopup, DELAY);
    return () => clearTimeout(timer);
  }, [openPopup]);

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isActive) closePopup();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isActive, closePopup]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closePopup();
  };

  // Only render on client side
  if (typeof window === 'undefined') return null;

  return (
    <div
      className={`${styles.overlay} ${isActive ? styles.active : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hf-popup-title"
      onClick={handleOverlayClick}
    >
      <div className={styles.modal}>
        {/* Close button — pure CSS X via ::before / ::after */}
        <button
          className={styles.close}
          onClick={(e) => { e.stopPropagation(); closePopup(); }}
          aria-label="Close popup"
        />

        <div className={`${styles.left} ${styles.closedLayout}`}>
          <div className={styles.leftTop}>
            <img
              src={LOGO_URL}
              alt="Head Field Logo"
              className={styles.logo}
            />

            <h2 className={styles.title} id="hf-popup-title">
              Registrations<br />
              <span className={styles.highlight}>CLOSED!</span>
            </h2>

            <p className={styles.taglineClosed}>
              Thank you for the overwhelming response. <br />
              The registrations are now closed.
            </p>
          </div>

          <div className={styles.helpSection}>
            <p className={styles.helpTitle}>Need help or have questions?</p>
            <div className={styles.contactRow}>
              {/* <div className={styles.qrCode}>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=tel:+919876543210&color=0c2b5c"
                  alt="Scan to call" />
              </div> */}
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Support Contact</span>
                <div className={styles.contactGroup}>
                  <div className={styles.iconPhone}></div>
                  <div className={styles.contactTexts}>
                    <a href="tel:+919870481008" className={styles.contactLink}>+91 98704 81008,</a>
                    <a href="tel:+918127222290" className={styles.contactLink}>+91 81272 22290,</a>
                    <a href="tel:+919211733881" className={styles.contactLink}>+91 92117 33881</a>
                  </div>
                </div>

                <div className={styles.contactGroup}>
                  <div className={styles.iconEnv}></div>
                  <div className={styles.contactTexts}>
                    <a href="mailto:jobs@headfield.com" className={styles.contactLink}>Jobs@headfield.com</a>
                  </div>
                </div>
                <span className={styles.contactTiming}>Available Mon-Fri, 9am - 6pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img src="https://beige-oyster-766501.hostingersite.com/hf-popup/assets/banner-close-mobile.jpeg" className={styles.mobileBanner} alt="Event Banner" />
        </div>
      </div>
    </div>
  );
};

export default SalesTalentPopup;
