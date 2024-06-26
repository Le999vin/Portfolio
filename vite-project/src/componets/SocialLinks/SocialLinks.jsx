// SocialLinks.jsx
import React from 'react';
import styles from './SocialLinks.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const SocialLinks = () => {
  return (
    <ul className={styles.socialList}>
      <li>
        <a href="#https://www.facebook.com/privacy/consent/?flow=confirmaccounts&source=pft_confirmaccounts" className={styles.whatsapp}>
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
          <span> - Whatsapp</span>
        </a>
      </li>
      <li>
        <a href="#https://x.com/?lang=de" className={styles.twitter}>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <span> - Twitter</span>
        </a>
      </li>
      <li>
        <a href="#" className={styles.google}>
          <i className="fa fa-google-plus" aria-hidden="true"></i>
          <span> - Google</span>
        </a>
      </li>
      <li>
        <a href="#" className={styles.instagram}>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <span> - Instagram</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
